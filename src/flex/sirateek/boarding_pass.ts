import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from '../types'

const BoardingPassFlexMessage: FlexContainer = {
  type: 'bubble',
  size: 'giga',
  header: {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'image',
        url: 'https://www.shareicon.net/data/128x128/2016/09/02/824400_airport_512x512.png',
        flex: 0,
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: 'SK',
                size: 'xxl',
                color: '#FFFFFF',
                weight: 'bold',
                flex: 0,
              },
              {
                type: 'text',
                text: 'Airline',
                size: 'xxl',
                flex: 1,
                color: '#FFFFFF',
              },
            ],
            spacing: 'sm',
          },
          {
            type: 'text',
            text: 'BOARDING PASS',
            color: '#FFFFFF',
            size: 'xl',
          },
          {
            type: 'text',
            text: 'ECONOMY CLASS',
            color: '#FFFFFF',
            size: 'xl',
            weight: 'bold',
          },
        ],
      },
    ],
    spacing: 'lg',
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
            text: 'NAME OF PASSENGER',
            size: 'md',
          },
          {
            type: 'text',
            text: 'SIRATEE.KITTIWITCHAOWAKUL',
            size: 'xxl',
            wrap: true,
            weight: 'bold',
          },
        ],
        spacing: 'sm',
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
                type: 'text',
                text: 'FLIGHT',
              },
              {
                type: 'text',
                text: 'SK111',
                size: 'xxl',
                weight: 'bold',
              },
            ],
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'DATE',
              },
              {
                type: 'text',
                text: '29FEB',
                size: 'xxl',
                weight: 'bold',
              },
            ],
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'SEAT',
              },
              {
                type: 'text',
                text: '28S',
                size: 'xxl',
                weight: 'bold',
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
                type: 'text',
                text: 'GATE',
              },
              {
                type: 'text',
                text: 'A1',
                size: 'xxl',
                weight: 'bold',
              },
            ],
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'BOARDING TIME',
              },
              {
                type: 'text',
                text: '00:10',
                size: 'xxl',
                weight: 'bold',
              },
            ],
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'FROM - TO',
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
                    type: 'text',
                    text: 'BKK',
                    size: '3xl',
                    weight: 'bold',
                  },
                  {
                    type: 'text',
                    text: 'BANGKOK',
                    weight: 'bold',
                  },
                ],
                paddingTop: '10px',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url: 'https://cdn.onlinewebfonts.com/svg/img_548146.png',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'KIX',
                    size: '3xl',
                    weight: 'bold',
                    align: 'center',
                  },
                  {
                    type: 'text',
                    text: 'OSAKA',
                    weight: 'bold',
                    align: 'center',
                  },
                ],
                paddingTop: '10px',
              },
            ],
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'ETKT 21720000000000000',
            align: 'center',
          },
          {
            type: 'text',
            text: 'SK*K ABCD1234',
            align: 'center',
          },
          {
            type: 'image',
            url: 'https://previews.123rf.com/images/mshch/mshch1209/mshch120900003/15165152-new-technology-barcode-called-pdf417-this-example-of-code-literally-translates-as-the-following-text.jpg',
            aspectMode: 'fit',
            aspectRatio: '3:1',
            size: 'full',
          },
        ],
        paddingTop: '10px',
      },
    ],
    spacing: 'md',
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'GATE CLOSES 10 MINUTES BEFORE DEPARTURE',
        size: 'lg',
        wrap: true,
        weight: 'bold',
        align: 'center',
        color: '#FFFFFF',
      },
    ],
    backgroundColor: '#f74d63',
  },
  styles: {
    header: {
      backgroundColor: '#069144',
    },
  },
}

const Metadata: IMetadata = {
  name: 'Boarding Pass',
  description: 'Boarding Pass',
  flexMessage: BoardingPassFlexMessage,
  source: {
    githubUsername: 'sirateek',
  },
}

export default Metadata
