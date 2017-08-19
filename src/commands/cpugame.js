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
    title: 'Against CPU Gameplay Rule I',
    color: '#2FA44F',
    text: 'If game is against CPU, required to play full game offense and defense.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Against CPU Gameplay Rule II',
    color: '#E3E4E6',
    text: 'Game must be broadcast, period. Post to regular chat when game is being as you would any other game. \n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Against CPU Gameplay Rule III',
    color: '#2FA44F',
    text: 'No running up score against CPU. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Against CPU Gameplay Rule IV',
    color: '#E3E4E6',
    text: 'Contact Commissioner prior to playing the CPU. \n',
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

module.exports = { pattern: /cpugame/ig, handler: handler }
