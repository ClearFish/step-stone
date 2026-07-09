/*
 * Offices 页面数据
 * - officesByRegion: 按地区分组的全球办公地点（静态数据）
 * - 每个办公室含 city / country / address / isHQ 字段
 */

export const officesByRegion = {
  americas: {
    label: 'Americas',
    offices: [
      {
        city: 'New York',
        country: 'United States',
        address: '277 Park Avenue, 45th Floor, New York, NY 10017',
        isHQ: true
      },
      {
        city: 'San Francisco',
        country: 'United States',
        address: 'One Maritime Plaza, 300 Clay Street, San Francisco, CA 94111',
        isHQ: false
      },
      {
        city: 'Cleveland',
        country: 'United States',
        address: '200 Public Square, Suite 4900, Cleveland, OH 44114',
        isHQ: false
      },
      {
        city: 'Toronto',
        country: 'Canada',
        address: '100 King Street West, 56th Floor, Toronto, ON M5X 1C7',
        isHQ: false
      },
      {
        city: 'São Paulo',
        country: 'Brazil',
        address:
          'Av. Brigadeiro Faria Lima, 3477, 14º andar, São Paulo, SP 04538-133',
        isHQ: false
      },
      {
        city: 'La Jolla',
        country: 'United States',
        address: '4660 La Jolla Village Drive, San Diego, CA 92122',
        isHQ: false
      }
    ]
  },
  europe: {
    label: 'Europe',
    offices: [
      {
        city: 'London',
        country: 'United Kingdom',
        address: '1 King Street, London EC2N 8AJ',
        isHQ: false
      },
      {
        city: 'Dublin',
        country: 'Ireland',
        address: 'Block C, East Point Business Park, Alfie Byrne Road, Dublin 3',
        isHQ: false
      },
      {
        city: 'Luxembourg',
        country: 'Luxembourg',
        address: '2-4 rue Eugène Ruppert, L-2453 Luxembourg',
        isHQ: false
      },
      {
        city: 'Zürich',
        country: 'Switzerland',
        address: 'Bahnhofstrasse 45, 8001 Zürich',
        isHQ: false
      }
    ]
  },
  asiaPacific: {
    label: 'Asia-Pacific',
    offices: [
      {
        city: 'Beijing',
        country: 'China',
        address: 'Suite 1108, China World Trade Center, Jianguomenwai Avenue, Beijing 100004',
        isHQ: false
      },
      {
        city: 'Hong Kong',
        country: 'Hong Kong SAR',
        address: 'Suite 2505, Two IFC, 8 Finance Street, Central, Hong Kong',
        isHQ: false
      },
      {
        city: 'Seoul',
        country: 'South Korea',
        address: '17F, Gangnam Finance Center, 152 Teheran-ro, Gangnam-gu, Seoul 06236',
        isHQ: false
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        address: 'Otemachi Tower, 1-1-2 Otemachi, Chiyoda-ku, Tokyo 100-0004',
        isHQ: false
      },
      {
        city: 'Sydney',
        country: 'Australia',
        address: 'Level 20, Aurora Place, 88 Phillip Street, Sydney NSW 2000',
        isHQ: false
      },
      {
        city: 'Perth',
        country: 'Australia',
        address: 'Level 14, Central Park, 152-158 St Georges Terrace, Perth WA 6000',
        isHQ: false
      }
    ]
  },
  middleEast: {
    label: 'Middle East',
    offices: [
      {
        city: 'Dubai',
        country: 'United Arab Emirates',
        address: 'Level 36, Boulevard Plaza 1, Downtown Dubai, Dubai',
        isHQ: false
      }
    ]
  }
}

/*
 * 区域顺序与展示用的 key 列表
 * 便于模板遍历，避免依赖对象 key 顺序
 */
export const officeRegionKeys = ['americas', 'europe', 'asiaPacific', 'middleEast']
