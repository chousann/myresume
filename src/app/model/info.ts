
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
    this.info = new Info();
    this.education = new Education();
    this.job = new Job();
    this.project = new Project();
    this.skill = new Skill();
    this.intention = new Intention();
    this.selfevaluation = new Selfevaluation();
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
  info: Info;
  education: Education;
  job: Job;
  project: Project;
  skill: Skill;
  intention: Intention;
  selfevaluation: Selfevaluation
}

export class Info {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Education {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Job {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Project {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Skill {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Intention {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
}

export class Selfevaluation {
  constructor() {
    this.resumelist = [
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
  resumelist: ResumeItem[];
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

