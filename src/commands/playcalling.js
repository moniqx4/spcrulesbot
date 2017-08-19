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
    title: 'Playcalling',
    color: '#E3E4E6',
    text: 'Players are required to mix up playcalling on offense and defense and call realistic plays based on situation.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Playcalling II',
    color: '#2FA44F',
    text: 'Defensive plays should be called that match with the offensive personnel and makes real football sense. For example, should not be calling Quarters defense when opponent is in redzone. \n',
    mrkdwn_in: ['text']
  },
   {
    title: 'Playcalling III',
    color: '#E3E4E6',
    text: 'Using Coach suggestions for playcalling is NOT allowed. \n',
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

module.exports = { pattern: /playcalling/ig, handler: handler }
