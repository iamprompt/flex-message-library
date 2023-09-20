import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from '../types'

const LON4FFlexMessage: FlexContainer = {
  type: 'bubble',
  header: {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'image',
        url: 'https://vos.line-scdn.net/lon-msg-dsgn/lon-logo-white.png',
        size: '80%',
        gravity: 'center',
        align: 'center',
        flex: 2,
      },
      {
        type: 'text',
        weight: 'regular',
        color: '#ffffffff',
        align: 'center',
        size: '14px',
        flex: 20,
        wrap: true,
        gravity: 'center',
        position: 'relative',
        contents: [
          {
            type: 'span',
            text: 'OFFICIAL NOTIFICATION',
          },
        ],
      },
      {
        type: 'text',
        // text: 'powered by',
        flex: 7,
        align: 'end',
        color: '#ffffffff',
        gravity: 'center',
        contents: [
          {
            type: 'span',
            text: 'powered by',
            style: 'italic',
            size: '10px',
            weight: 'regular',
          },
        ],
        wrap: true,
        offsetTop: '0.3px',
      },
      {
        type: 'text',
        // text: 'powered by',
        flex: 4,
        align: 'center',
        color: '#ffffffff',
        gravity: 'center',
        wrap: true,
        contents: [
          {
            type: 'span',
            text: ' LINE',
            weight: 'bold',
            size: '12px',
          },
        ],
      },
    ],
    offsetTop: 'none',
    paddingAll: 'none',
    paddingTop: 'md',
    paddingBottom: 'md',
    paddingStart: 'lg',
    paddingEnd: 'lg',
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'Payment complete',
            weight: 'bold',
            size: 'lg',
            wrap: true,
          },
        ],
        paddingTop: 'none',
        offsetTop: 'none',
        offsetBottom: 'none',
      },
      {
        type: 'separator',
        margin: 'md',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'Paid amount:',
            weight: 'regular',
            size: 'md',
            wrap: true,
            color: '#9E9E9E',
            margin: 'none',
          },
        ],
        paddingTop: 'lg',
        offsetTop: 'none',
        offsetBottom: 'none',
        spacing: 'none',
        margin: 'none',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'USD 123.45',
            weight: 'bold',
            size: 'xxl',
            wrap: true,
          },
        ],
        paddingTop: 'none',
        offsetTop: 'none',
        offsetBottom: 'none',
      },
      {
        type: 'separator',
        margin: 'md',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: 'Card details',
                color: '#aaaaaa',
                flex: 3,
                size: 'sm',
              },
              {
                type: 'text',
                text: 'LINE Visa (1234)',
                flex: 5,
                size: 'sm',
                color: '#666666',
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: 'Date & time',
                color: '#aaaaaa',
                flex: 3,
                size: 'sm',
              },
              {
                type: 'text',
                text: '12-25 13:00',
                flex: 5,
                size: 'sm',
                color: '#666666',
              },
            ],
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: 'Store name',
                color: '#aaaaaa',
                flex: 3,
                size: 'sm',
              },
              {
                type: 'text',
                text: 'Brown Cafe',
                flex: 5,
                size: 'sm',
                color: '#666666',
              },
            ],
          },
        ],
        margin: 'lg',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            contents: [
              {
                type: 'span',
                text: 'Thank you for your purchase. Your payment has been successfully received.',
              },
            ],
            wrap: true,
            offsetTop: 'none',
          },
        ],
        paddingTop: 'md',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: 'CHECK DETAILS',
              uri: 'https://today.line.me/th/v2/article/PGjoaWV',
            },
            margin: 'none',
            height: 'sm',
            style: 'secondary',
            color: '#eeeeee',
            gravity: 'bottom',
          },
        ],
        spacing: 'sm',
        flex: 0,
        paddingTop: 'lg',
        paddingBottom: 'sm',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: 'PURCHASE HISTORY',
              uri: 'https://today.line.me/th/v2/article/PGjoaWV',
            },
            margin: 'none',
            height: 'sm',
            style: 'secondary',
            color: '#eeeeee',
            gravity: 'bottom',
          },
        ],
        spacing: 'sm',
        flex: 0,
        paddingTop: 'md',
        paddingBottom: 'sm',
      },
    ],
    paddingAll: 'none',
    paddingTop: 'xl',
    paddingBottom: 'lg',
    paddingStart: 'xxl',
    paddingEnd: 'xxl',
  },
  footer: {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'text',
        contents: [
          {
            type: 'span',
            text: 'Learn more about LINE Official Notification ',
            color: '#BDBDBD',
          },
          {
            type: 'span',
            text: 'here',
            decoration: 'underline',
            color: '#00b4ff',
          },
          {
            type: 'span',
            text: '.',
            color: '#BDBDBD',
          },
        ],
        wrap: true,
        size: '10px',
        align: 'center',
      },
    ],
    margin: 'none',
    borderWidth: 'none',
    paddingTop: 'sm',
    paddingBottom: 'md',
    action: {
      type: 'uri',
      label: 'action',
      uri: 'https://today.line.me/th/v2/article/PGjoaWV',
    },
  },
  styles: {
    header: {
      backgroundColor: '#06C755',
    },
    footer: {
      backgroundColor: '#EEEEEE',
    },
  },
}

const Metadata: IMetadata = {
  name: 'World Cup Match',
  description: 'World Cup Match',
  flexMessage: LON4FFlexMessage,
  source: {
    type: 'github',
    githubUsername: 'kamnan43',
  },
}

export default Metadata
