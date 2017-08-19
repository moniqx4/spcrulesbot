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
    title: 'Trade Rule I',
    color: '#2FA44F',
    text: 'All trades, or signings MUST be submitted and approved by a Commissioner or Co-Commissioner before being executed.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Trade Rule II',
    color: '#E3E4E6',
    text: 'There is a max of 2 trades per season for each team. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Trade Rule III',
    color: '#2FA44F',
    text: 'New coaches can NOT propose or accept trades their 1st season in SPC. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Trade Rule IV',
    color: '#E3E4E6',
    text: '1st season ONLY, may be required to execute real life transactions, but only do so when requested by a Commissioner or Co-Commissioner. \n',
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

module.exports = { pattern: /trades/ig, handler: handler }
