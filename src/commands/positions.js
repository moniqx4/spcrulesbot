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
    title: 'Position Rule I',
    color: '#E3E4E6',
    text: 'HBs can not be substituted in a FB or TE position. The only time an HB package swap is allowed is when the FB position(s) are from Shotgun or in Split Back Formations. \n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Position Rule II',
    color: '#E3E4E6',
    text: 'FB can play FB-RB-TE. HB can play HB-WR. TE can play TE-FB. WR can play WR-HB. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Position Rule III',
    color: '#E3E4E6',
    text: 'Changing an established NFL player position outright, you must clear it with the commissioner first. \n',
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

module.exports = { pattern: /positions/ig, handler: handler }
