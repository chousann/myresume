export interface DocSection {
  id: string;
  name: string;
  summary?: string;
}

export const SECTIONS: Array<DocSection> = [
  {
    id: 'info',
    name: '个人信息',
    summary: ''
  },
  {
    id: 'education',
    name: '教育背景',
    summary: ''
  },
  {
    id: 'job',
    name: '工作经历',
    summary: ''
  },
  {
    id: 'project',
    name: '项目经验',
    summary: ''
  },
  {
    id: 'skill',
    name: '职业技能',
    summary: ''
  },
  {
    id: 'intention',
    name: '求职意向',
    summary: ''
  },
  {
    id: 'selfevaluation',
    name: '自我评价',
    summary: ''
  }
];
