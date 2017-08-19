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
    title: 'Disconnect Rule I',
    color: '#2FA44F',
    text: 'All disconnected games must be brought to the Commissioner\'s attention with quarter, time, score and who was winning before the game can be replayed legally.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Disconnect Rule II',
    color: '#E3E4E6',
    text: 'If a disconnect occurs within the first half and the lead is not greater than two scores. The game will be a fair restart. \n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Disconnect Rule III',
    color: '#E3E4E6',
    text: 'Disconnects in the 3rd quarter, picture should be taken of score, and send a note to the commissioner. At this point the score will be noted and the new game can be played til half time.  At which point another score board picture will be required. The two scores will then be added, and the person with the most points will get the force win. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Disconnect Rule IV',
    color: '#E3E4E6',
    text: 'If the game is disconnected in the 4th quarter and the lead is greater than 10 points, the higher scorer will get the forced win. \n',
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

module.exports = { pattern: /disconnect/ig, handler: handler }
