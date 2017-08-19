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
    text: 'Down by 20 in the 1st half, can go for it anywhere on the field.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule II',
    color: '#E3E4E6',
    text: 'Down by 17 in the 2nd half, can go for it anywhere on the field.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule III',
    color: '#2FA44F',
    text: 'Overtime, can go for it anywhere on the field.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule IV',
    color: '#E3E4E6',
    text: 'If the ball is on the 50 yard line or anywhere in your opponents territory and it is no greater than 4th and 1, you can go for it. \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule V',
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
