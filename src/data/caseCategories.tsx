import React from 'react';
import { Cpu, Wrench, Home, ShoppingBag } from 'lucide-react';
import {
  heavyImg1,
  heavyImg2,
  heavyImg3,
  heavyImg4,
  heavyImg5,
  heavyImg6,
  heavyImg7,
  heavyImg8,
  heavyImg9,
  hardwareImg1,
  hardwareImg2,
  hardwareImg3,
  hardwareImg4,
  hardwareImg5,
  hardwareImg6,
  hardwareImg7,
  hardwareImg8,
  hardwareImg9,
  buildingImg1,
  buildingImg2,
  buildingImg3,
  buildingImg4,
  buildingImg5,
  buildingImg6,
  buildingImg7,
  buildingImg8,
  buildingImg9,
  fmcgImg1,
  fmcgImg2,
  fmcgImg3,
  fmcgImg4,
  fmcgImg5,
  fmcgImg6,
  fmcgImg7,
  fmcgImg8,
  fmcgImg9,
} from './caseImages';

export interface ProductGridItem {
  nameZh: string;
  nameEn: string;
  url: string;
  fileName: string;
}

export interface SectorCaseData {
  id: string;
  sectorNumber: string;
  icon: React.ReactNode;
  titleZh: string;
  titleEn: string;
  shortDescZh: string;
  shortDescEn: string;
  scopeListZh: string;
  scopeListEn: string;
  products: ProductGridItem[];
}

export const sectorCasesData: SectorCaseData[] = [
  {
    id: 'heavy-equipment',
    sectorNumber: '01',
    icon: <Cpu className="w-5 h-5" />,
    titleZh: '大设备赛道',
    titleEn: 'HEAVY EQUIPMENT',
    shortDescZh: '专注新能源、数控机床与激光设备等高货值大工业品海外直营。',
    shortDescEn: 'Specializing in direct global export for new energy, CNC, and laser equipment.',
    scopeListZh: '激光切割机 · 智能速冻机 · 数控机床 · 新能源产线 · 高空作业车 · 包装机 · 检测仪器 · 折弯机',
    scopeListEn: 'Laser Cutters · IQF Freezers · CNC Machines · Solar Lines · Aerial Lifts · Packaging · Inspection · Benders',
    products: [
      {
        nameZh: '大设备产品展示 1',
        nameEn: 'Heavy Equipment 1',
        url: heavyImg1,
        fileName: 'heavy_1.png',
      },
      {
        nameZh: '大设备产品展示 2',
        nameEn: 'Heavy Equipment 2',
        url: heavyImg2,
        fileName: 'heavy_2.png',
      },
      {
        nameZh: '大设备产品展示 3',
        nameEn: 'Heavy Equipment 3',
        url: heavyImg3,
        fileName: 'heavy_3.png',
      },
      {
        nameZh: '大设备产品展示 4',
        nameEn: 'Heavy Equipment 4',
        url: heavyImg4,
        fileName: 'heavy_4.png',
      },
      {
        nameZh: '大设备产品展示 5',
        nameEn: 'Heavy Equipment 5',
        url: heavyImg5,
        fileName: 'heavy_5.png',
      },
      {
        nameZh: '大设备产品展示 6',
        nameEn: 'Heavy Equipment 6',
        url: heavyImg6,
        fileName: 'heavy_6.png',
      },
      {
        nameZh: '大设备产品展示 7',
        nameEn: 'Heavy Equipment 7',
        url: heavyImg7,
        fileName: 'heavy_7.png',
      },
      {
        nameZh: '大设备产品展示 8',
        nameEn: 'Heavy Equipment 8',
        url: heavyImg8,
        fileName: 'heavy_8.png',
      },
      {
        nameZh: '大设备产品展示 9',
        nameEn: 'Heavy Equipment 9',
        url: heavyImg9,
        fileName: 'heavy_9.png',
      },
    ],
  },
  {
    id: 'hardware-parts',
    sectorNumber: '02',
    icon: <Wrench className="w-5 h-5" />,
    titleZh: '五金配件',
    titleEn: 'HARDWARE & PARTS',
    shortDescZh: '赋能精密零部件、工业电机与模具拓展全球主机厂与分销渠道。',
    shortDescEn: 'Empowering precision components, motors, and molds to expand global OEM channels.',
    scopeListZh: '工业导轨 · 伺服电机 · 数控刀片 · 冲压模具 · 铝合金压铸 · 精密滑台 · 工业过滤器 · 五金标件',
    scopeListEn: 'Linear Guides · Servo Motors · CNC Inserts · Molds · Die-Castings · Slides · Filters · Hardware',
    products: [
      {
        nameZh: '五金配件产品展示 1',
        nameEn: 'Hardware Product 1',
        url: hardwareImg1,
        fileName: 'hardware_1.png',
      },
      {
        nameZh: '五金配件产品展示 2',
        nameEn: 'Hardware Product 2',
        url: hardwareImg2,
        fileName: 'hardware_2.png',
      },
      {
        nameZh: '五金配件产品展示 3',
        nameEn: 'Hardware Product 3',
        url: hardwareImg3,
        fileName: 'hardware_3.png',
      },
      {
        nameZh: '五金配件产品展示 4',
        nameEn: 'Hardware Product 4',
        url: hardwareImg4,
        fileName: 'hardware_4.png',
      },
      {
        nameZh: '五金配件产品展示 5',
        nameEn: 'Hardware Product 5',
        url: hardwareImg5,
        fileName: 'hardware_5.png',
      },
      {
        nameZh: '五金配件产品展示 6',
        nameEn: 'Hardware Product 6',
        url: hardwareImg6,
        fileName: 'hardware_6.png',
      },
      {
        nameZh: '五金配件产品展示 7',
        nameEn: 'Hardware Product 7',
        url: hardwareImg7,
        fileName: 'hardware_7.png',
      },
      {
        nameZh: '五金配件产品展示 8',
        nameEn: 'Hardware Product 8',
        url: hardwareImg8,
        fileName: 'hardware_8.png',
      },
      {
        nameZh: '五金配件产品展示 9',
        nameEn: 'Hardware Product 9',
        url: hardwareImg9,
        fileName: 'hardware_9.png',
      },
    ],
  },
  {
    id: 'building-furniture',
    sectorNumber: '03',
    icon: <Home className="w-5 h-5" />,
    titleZh: '家具建材',
    titleEn: 'FURNITURE & BUILDING',
    shortDescZh: '助力全屋定制、装饰建材与智能卫浴精准对接海外工程与批发渠道。',
    shortDescEn: 'Connecting custom furniture and building materials with overseas wholesale & project buyers.',
    scopeListZh: '集成墙板 · 定制橱柜 · 防水地板 · 智能马桶 · 隔热涂料 · 系统门窗 · 高级沙发 · 现代餐椅',
    scopeListEn: 'Wall Panels · Custom Cabinets · Wood Flooring · Smart Toilets · Thermal Paint · Windows · Sofas · Chairs',
    products: [
      {
        nameZh: '家具建材产品展示 1',
        nameEn: 'Building Product 1',
        url: buildingImg1,
        fileName: 'building_1.png',
      },
      {
        nameZh: '家具建材产品展示 2',
        nameEn: 'Building Product 2',
        url: buildingImg2,
        fileName: 'building_2.png',
      },
      {
        nameZh: '家具建材产品展示 3',
        nameEn: 'Building Product 3',
        url: buildingImg3,
        fileName: 'building_3.png',
      },
      {
        nameZh: '家具建材产品展示 4',
        nameEn: 'Building Product 4',
        url: buildingImg4,
        fileName: 'building_4.png',
      },
      {
        nameZh: '家具建材产品展示 5',
        nameEn: 'Building Product 5',
        url: buildingImg5,
        fileName: 'building_5.png',
      },
      {
        nameZh: '家具建材产品展示 6',
        nameEn: 'Building Product 6',
        url: buildingImg6,
        fileName: 'building_6.png',
      },
      {
        nameZh: '家具建材产品展示 7',
        nameEn: 'Building Product 7',
        url: buildingImg7,
        fileName: 'building_7.png',
      },
      {
        nameZh: '家具建材产品展示 8',
        nameEn: 'Building Product 8',
        url: buildingImg8,
        fileName: 'building_8.png',
      },
      {
        nameZh: '家具建材产品展示 9',
        nameEn: 'Building Product 9',
        url: buildingImg9,
        fileName: 'building_9.png',
      },
    ],
  },
  {
    id: 'fmcg-consumer',
    sectorNumber: '04',
    icon: <ShoppingBag className="w-5 h-5" />,
    titleZh: '快销品',
    titleEn: 'FMCG & CONSUMER',
    shortDescZh: '驱动AI智能硬件、潮玩IP与消费品引爆全球社交电商与线下分销。',
    shortDescEn: 'Driving AI smart devices, art toys, and consumer goods across global distribution.',
    scopeListZh: 'AI眼镜 · 智能机器人 · 潮玩IP · 物联中控 · 智能健身 · 车载电子 · 智能箱包 · 潮流服饰',
    scopeListEn: 'AI Glasses · Service Robots · Art Toys · Smart IoT · Fitness Gear · Auto Tech · Smart Bags · Fashion',
    products: [
      {
        nameZh: '快销品产品展示 1',
        nameEn: 'FMCG Product 1',
        url: fmcgImg1,
        fileName: 'fmcg_1.png',
      },
      {
        nameZh: '快销品产品展示 2',
        nameEn: 'FMCG Product 2',
        url: fmcgImg2,
        fileName: 'fmcg_2.png',
      },
      {
        nameZh: '快销品产品展示 3',
        nameEn: 'FMCG Product 3',
        url: fmcgImg3,
        fileName: 'fmcg_3.png',
      },
      {
        nameZh: '快销品产品展示 4',
        nameEn: 'FMCG Product 4',
        url: fmcgImg4,
        fileName: 'fmcg_4.png',
      },
      {
        nameZh: '快销品产品展示 5',
        nameEn: 'FMCG Product 5',
        url: fmcgImg5,
        fileName: 'fmcg_5.png',
      },
      {
        nameZh: '快销品产品展示 6',
        nameEn: 'FMCG Product 6',
        url: fmcgImg6,
        fileName: 'fmcg_6.png',
      },
      {
        nameZh: '快销品产品展示 7',
        nameEn: 'FMCG Product 7',
        url: fmcgImg7,
        fileName: 'fmcg_7.png',
      },
      {
        nameZh: '快销品产品展示 8',
        nameEn: 'FMCG Product 8',
        url: fmcgImg8,
        fileName: 'fmcg_8.png',
      },
      {
        nameZh: '快销品产品展示 9',
        nameEn: 'FMCG Product 9',
        url: fmcgImg9,
        fileName: 'fmcg_9.png',
      },
    ],
  },
];
