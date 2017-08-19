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
    title: 'No Huddle rules',
    color: '#2FA44F',
    text: 'You can "no huddle" at any time in game.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'No Huddle II rules',
    color: '#2FA44F',
    text: 'There is a maximum of 3 no huddles in a row then you must return to huddle, no matter the game situation.\n',
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

module.exports = { pattern: /nohuddle/ig, handler: handler }
