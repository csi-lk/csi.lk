---
title: Discord voice message transcription with OpenClaw and Deepgram
description: How to automatically transcribe Discord voice messages using OpenClaw and Deepgram's Nova speech-to-text API
permalink: articles/discord-voice-transcription-openclaw-deepgram.html
tags: article
keywords: discord, voice, transcription, deepgram, openclaw, speech-to-text, nova, audio, bot
layout: article
date: 2025-02-05
---

I wanted my Discord bot to understand voice messages — not just text. Discord added voice messages a while back and people actually use them, but most bots just ignore the audio entirely.

[OpenClaw](https://github.com/openclaw/openclaw) has built-in audio transcription support via [Deepgram](https://deepgram.com), so the setup is surprisingly minimal.

## Prerequisites

- A running OpenClaw instance with Discord connected
- A [Deepgram API key](https://console.deepgram.com/) (free tier works fine)

## Setup

Add your Deepgram API key to the OpenClaw config:

```json
{
  "env": {
    "vars": {
      "DEEPGRAM_API_KEY": "your_key_here"
    }
  }
}
```

Then enable audio transcription with the Deepgram provider:

```json
{
  "tools": {
    "media": {
      "audio": {
        "enabled": true,
        "models": [
          { "provider": "deepgram", "model": "nova-2" }
        ]
      }
    }
  }
}
```

Restart the gateway and you're done.

## Optional: smart formatting

Deepgram has some nice formatting options that clean up the transcript output — punctuation, capitalisation, formatting numbers properly:

```json
{
  "tools": {
    "media": {
      "audio": {
        "providerOptions": {
          "deepgram": {
            "punctuate": true,
            "smart_format": true
          }
        }
      }
    }
  }
}
```

## How it works

When someone sends a voice message in Discord, OpenClaw:

1. Detects the audio attachment
2. Sends it to Deepgram's pre-recorded transcription endpoint
3. Injects the transcript into the conversation as text

The bot then responds to the transcribed text like any other message. No streaming — it transcribes the whole clip first, then replies.

## Notes

- Deepgram's free tier gives you $200 in credit which is plenty for voice messages
- `nova-2` is the model I'm using — solid accuracy, fast, cheap
- Max file size is configurable via `tools.media.audio.maxBytes` (default 20MB)
- Works with any audio format Discord sends (usually ogg/opus)
