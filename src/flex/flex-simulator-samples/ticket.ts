import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from '../types'

const TicketFlexMessage: FlexContainer = {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      label: 'Action',
      uri: 'http://linecorp.com/',
    },
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'md',
    contents: [
      {
        type: 'text',
        text: "BROWN'S ADVENTURE\nIN MOVIE",
        wrap: true,
        weight: 'bold',
        gravity: 'center',
        size: 'xl',
      },
      {
        type: 'box',
        layout: 'baseline',
        margin: 'md',
        contents: [
          {
            type: 'icon',
            size: 'sm',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
          },
          {
            type: 'icon',
            size: 'sm',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
          },
          {
            type: 'icon',
            size: 'sm',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
          },
          {
            type: 'icon',
            size: 'sm',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
          },
          {
            type: 'icon',
            size: 'sm',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png',
          },
          {
            type: 'text',
            text: '4.0',
            size: 'sm',
            color: '#999999',
            margin: 'md',
            flex: 0,
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Date',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: 'Monday 25, 9:00PM',
                wrap: true,
                size: 'sm',
                color: '#666666',
                flex: 4,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Place',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: '7 Floor, No.3',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 4,
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Seats',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
              },
              {
                type: 'text',
                text: 'C Row, 18 Seat',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 4,
              },
            ],
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'xxl',
        contents: [
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png',
            aspectMode: 'cover',
            size: 'xl',
            margin: 'md',
          },
          {
            type: 'text',
            text: 'You can enter the theater by using this code instead of a ticket',
            color: '#aaaaaa',
            wrap: true,
            margin: 'xxl',
            size: 'xs',
          },
        ],
      },
    ],
  },
}

const Metadata: IMetadata = {
  name: 'Ticket',
  description: 'Ticket',
  flexMessage: TicketFlexMessage,
  source: {
    type: 'link',
    label: 'Ticket',
    link: '',
  },
}

export default Metadata
