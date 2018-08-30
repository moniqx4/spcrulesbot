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
    title: 'Running',
    color: '#2FA44F',
    text: 'Required to run a minimum of 12 times per game from the RB/FB position.This does not include QB or WR run plays.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Running II',
    color: '#E3E4E6',
    text: 'Run in a realistic sim manner. Running directly straight across left or right is not realistic. Not done in real life, not done here.\n',
    mrkdwn_in: ['text']
  },
   {
    title: 'Running III',
    color: '#E3E4E6',
    text: 'Run assist feature must be DISABLED.\n',
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

module.exports = { pattern: /running/ig, handler: handler }
