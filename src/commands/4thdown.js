'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Rulesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: '4th Down Rule',
    color: '#2FA44F',
    text: 'Regardless of score. If the to go distance is 4th and 2 within your opponent’s 38 to 43-yard line. You can go for it once per game.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule II',
    color: '#E3E4E6',
    text: 'On 4th and goal within 3 yards of end zone you can go for it (once per game). \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule III',
    color: '#E3E4E6',
    text: '3rd Quarter: if you’re down by 17 or more, can go for it from anywhere on field. \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule IV',
    color: '#2FA44F',
    text: 'Overtime, can go for it anywhere on the field.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule V',
    color: '#E3E4E6',
    text: 'If the ball is on the 50 yard line or anywhere in your opponents territory and it is no greater than 4th and 1, you can go for it. \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule VI',
    color: '#2FA44F',
    text: 'If you’re behind in the 4th quarter by any measurement anywhere you can go for it at your risk. \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /4thdown/ig, handler: handler }
