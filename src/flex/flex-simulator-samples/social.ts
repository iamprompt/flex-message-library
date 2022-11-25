import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from './types'

const SocialFlexMessage: FlexContainer = {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
            size: '5xl',
            aspectMode: 'cover',
            aspectRatio: '150:196',
            gravity: 'center',
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg',
                size: 'full',
                aspectMode: 'cover',
                aspectRatio: '150:98',
                gravity: 'center',
              },
              {
                type: 'image',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg',
                size: 'full',
                aspectMode: 'cover',
                aspectRatio: '150:98',
                gravity: 'center',
              },
            ],
            flex: 1,
          },
        ],
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
                aspectMode: 'cover',
                size: 'full',
              },
            ],
            cornerRadius: '100px',
            width: '72px',
            height: '72px',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                contents: [
                  {
                    type: 'span',
                    text: 'brown_05',
                    weight: 'bold',
                    color: '#000000',
                  },
                  {
                    type: 'span',
                    text: '     ',
                  },
                  {
                    type: 'span',
                    text: 'I went to the Brown&Cony cafe in Tokyo and took a picture',
                  },
                ],
                size: 'sm',
                wrap: true,
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '1,140,753 Like',
                    size: 'sm',
                    color: '#bcbcbc',
                  },
                ],
                spacing: 'sm',
                margin: 'md',
              },
            ],
          },
        ],
        spacing: 'xl',
        paddingAll: '20px',
      },
    ],
    paddingAll: '0px',
  },
}

const Metadata: IMetadata = {
  name: 'Social',
  description: 'Social',
  flexMessage: SocialFlexMessage,
  source: {
    label: 'Social',
    link: 'https://developers.line.biz/en/reference/messaging-api/#social',
  },
}

export default Metadata
