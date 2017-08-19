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
    title: 'Audibles',
    color: '#2FA44F',
    text: 'The offense is limited to two Audibles per play. This includes flipping play, motion, hot routes, and line audibles.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Audibles II',
    color: '#2FA44F',
    text: 'If you audible or flip play, do not quick snap directly afterwards. In the NFL it takes a second for the audible to register with the outside receivers, your opponent should have the same time allowed.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Audibles III',
    color: '#2FA44F',
    text: 'Limited to ONE player motion per play.\n',
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

module.exports = { pattern: /audibles/ig, handler: handler }
