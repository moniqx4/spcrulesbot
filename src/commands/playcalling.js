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
    text: 'Calling Goal Line offense and defense is permitted for the goal line on either end of the field, 3rd or 4th down with inches to go. \n',
    mrkdwn_in: ['text']
  },   
   {
    title: 'Playcalling III',
    color: '#E3E4E6',
    text: 'You should not have a total of 12 plays equaling the same concept used in single game. \n',
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
