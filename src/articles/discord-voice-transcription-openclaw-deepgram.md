---
title: Talking to my AI assistant via Discord voice messages
description: Using Discord voice messages with OpenClaw and Deepgram to capture thoughts, extract tasks and take notes by just talking
permalink: articles/discord-voice-transcription-openclaw-deepgram.html
tags: article
keywords: discord, voice, transcription, deepgram, openclaw, speech-to-text, ai, assistant, tasks, notes
layout: article
date: 2025-02-05
---

I run an AI assistant ([OpenClaw](https://github.com/openclaw/openclaw)) that lives in my Discord server. It manages my notes, tasks, calendar — basically a second brain I can message. The problem is I don't always want to type. Sometimes I'm walking the dog or cooking and I just want to say "remind me to check the deployment tomorrow" and have it handled.

Discord has voice messages built in. Long press the mic, talk, send. So the question was: can I pipe that audio through to my assistant and have it actually understand what I said?

## The setup

Turns out OpenClaw already supports audio transcription via [Deepgram](https://deepgram.com). The entire setup was two config changes — add an API key and enable the audio provider:

```json
{
  "env": {
    "vars": {
      "DEEPGRAM_API_KEY": "your_key_here"
    }
  },
  "tools": {
    "media": {
      "audio": {
        "enabled": true,
        "models": [{ "provider": "deepgram", "model": "nova-2" }],
        "providerOptions": {
          "deepgram": { "punctuate": true, "smart_format": true }
        }
      }
    }
  }
}
```

Restart the gateway, done. No webhook plumbing, no separate transcription service, no glue code. When a voice message lands in Discord, OpenClaw picks up the audio attachment, sends it to Deepgram, gets the transcript back and treats it like any other text message.

I was expecting at least an afternoon of debugging. It took about ten minutes.

## What I actually use it for

The real value isn't the transcription — it's what happens after. My assistant already knows how to create tasks, update notes, and add calendar events. Voice messages just became another input method.

A few things I find myself doing:

- **Brain dumps** — rambling about a project while walking, then asking the assistant to extract the action items
- **Quick tasks** — "add a task to check the CI pipeline after lunch" without opening anything
- **Meeting notes** — voice-summarising what just happened in a call while it's still fresh

It's the kind of thing that sounds gimmicky until you use it for a week and realise you're capturing twice as much stuff because the friction dropped to almost zero.

## Cost

Deepgram gives you $200 in free credit on signup which goes a long way for short voice messages. After that, Nova-2 runs at $0.0043/minute — a 30-second voice message costs a fraction of a cent. I've been using it daily and haven't made a dent in the free tier.

## The takeaway

The interesting part wasn't the technical setup — that was trivial. It was the workflow shift. Typing a message to an AI assistant is fine when you're at a desk. Being able to just *talk* while doing other things makes it actually useful as a capture tool rather than something you have to sit down and use.
