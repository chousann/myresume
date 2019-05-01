
export class InfoModel {
  constructor() {
    this.commonData = new CommonData();
    this.aplData = new AplData();
  }
  commonData: CommonData;
  aplData: AplData
}

export class CommonData {
  constructor() {
    this.status = '200';
    this.authKey = '1111';
  }
  status: string;
  authKey: string;
}

export class AplData {
  constructor() {
    this.name = "name";
    this.sex = "sex";
    this.birth = "birth";
    this.age = "age";
    this.address = "address";
    this.phone = "phone";
    this.email = "email";
    this.wechat = "wechat";
    this.github = "github";
    this.info = Info.resumelist;
    this.education = Info.resumelist;
    this.job = Info.resumelist;
    this.project = Info.resumelist;
    this.skill = Info.resumelist;
    this.intention = Info.resumelist;
    this.selfevaluation = Info.resumelist;
  }
  name: string;
  sex: string;
  birth: string;
  age: string;
  address: string;
  phone: string;
  email: string;
  wechat: string;
  github: string;
  info: ResumeItem[];
  education: ResumeItem[];
  job: ResumeItem[];
  project: ResumeItem[];
  skill: ResumeItem[];
  intention: ResumeItem[];
  selfevaluation: ResumeItem[]
}

export class Info {
  static resumelist: ResumeItem[] = [
      {
        index: '1',
        type: '学校名称',
        descri: '江苏科技大学'
      },
      {
        index: '2',
        type: '就读时间',
        descri: '2016年7月至今'
      },
      {
        index: '3',
        type: '所学专业',
        descri: 'se'
      },
      {
        index: '4',
        type: '学历学位',
        descri: 'yyyy'
      },
      {
        index: '5',
        type: '工作描述',
        descri: '上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司'
      },
      {
        index: '6',
        type: '工作职责',
        descri: '上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司'
      },
      {
        index: '7',
        type: '完成业绩',
        descri: '上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司上海海隆软件有限公司'
      }
    ]
}

export class ResumeItem {

  constructor() {
    this.index = '1';
    this.type = 'type';
    this.descri = 'descri';
  }
  index: string;
  type: string;
  descri: string;
}

