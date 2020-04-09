import * as Silk from '../../lib/silk'

const Time = ({ date }: { date: Date }): HTMLElement => (
  <time datetime={date.toISOString().split('T')[0]}>{date.toISOString().split('T')[0]}</time>
)

export default Time
