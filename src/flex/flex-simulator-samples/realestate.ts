import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from '../types'

const RealEstateFlexMessage: FlexContainer = {
  type: 'bubble',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
            size: 'full',
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
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
                size: 'full',
                aspectMode: 'cover',
                aspectRatio: '150:98',
                gravity: 'center',
              },
              {
                type: 'image',
                url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
                size: 'full',
                aspectMode: 'cover',
                aspectRatio: '150:98',
                gravity: 'center',
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: 'NEW',
                size: 'xs',
                color: '#ffffff',
                align: 'center',
                gravity: 'center',
              },
            ],
            backgroundColor: '#EC3D44',
            paddingAll: '2px',
            paddingStart: '4px',
            paddingEnd: '4px',
            flex: 0,
            position: 'absolute',
            offsetStart: '18px',
            offsetTop: '18px',
            cornerRadius: '100px',
            width: '48px',
            height: '25px',
          },
        ],
      },
    ],
    paddingAll: '0px',
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
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                size: 'xl',
                wrap: true,
                text: 'Cony Residence',
                color: '#ffffff',
                weight: 'bold',
              },
              {
                type: 'text',
                text: '3 Bedrooms, ¥35,000',
                color: '#ffffffcc',
                size: 'sm',
              },
            ],
            spacing: 'sm',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    size: 'sm',
                    wrap: true,
                    color: '#ffffffde',
                    text: 'Private Pool, Delivery box, Floor heating, Private Cinema',
                  },
                ],
              },
            ],
            paddingAll: '13px',
            backgroundColor: '#ffffff1A',
            cornerRadius: '2px',
            margin: 'xl',
          },
        ],
      },
    ],
    paddingAll: '20px',
    backgroundColor: '#464F69',
  },
}

const Metadata: IMetadata = {
  name: 'RealEstateFlexMessage',
  description: 'Real Estate Flex Message',
  flexMessage: RealEstateFlexMessage,
  source: {
    type: 'link',
    label: 'LINE Developers',
    link: '',
  },
}

export default Metadata
