import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.less';

const isParent = (obj: EventTarget | null, parentObj: HTMLDivElement | null) => {
  // @ts-ignore
  while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY') {
    if (obj == parentObj) {
      return true;
    }
    // @ts-ignore
    obj = obj.parentNode;
  }
  return false;
};

const iconList = [
  {
    agentId: 239,
    appAgentId: 102,
    name: '群应用（勿动）',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=b9defe00066460982e0936732ab2a4a4',
  },
  {
    agentId: 308,
    appAgentId: 106,
    name: '助理小秘',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=28770a17c24b89b32e92b7e6379f5c2e',
  },
  {
    agentId: 311,
    appAgentId: 108,
    name: '度生活',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=f878b0290167be34e823f2ef6df94c5a',
  },
  {
    agentId: 314,
    appAgentId: 110,
    name: '智能会议室',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=410c89f5009bc4f66b52525f6f993d05',
  },
  {
    agentId: 337,
    appAgentId: 119,
    name: '会议待办',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=2ee29ab40f2ce69f5069c1bb1585dd4b',
  },
  {
    agentId: 942,
    appAgentId: 231,
    name: 'vbox权限应用（勿动）',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=69979dcdc14766f504fb3c308eacb90a',
  },
  {
    agentId: 946,
    appAgentId: 233,
    name: 'HiTV绑定应用',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=f612f0bbc40520c519eb1e5e6f248bd0',
  },
  {
    agentId: 957,
    appAgentId: 238,
    name: '企业云盘',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=e1cb254bb0a6973ec8ed540ebd73dad6',
  },
  {
    agentId: 1137,
    appAgentId: 269,
    name: '智慧IT',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=fe18256eb8d2495d1b59b682c2f4cf25',
  },
  {
    agentId: 1152,
    appAgentId: 273,
    name: '普通机器人(勿动)',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=205ba110795d2af316e7a0b4ad1d3f0c',
  },
  {
    agentId: 1154,
    appAgentId: 275,
    name: '定时通知',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=06a6e234295e5838c8dc5509c7d5c2a1',
  },
  {
    agentId: 10240,
    appAgentId: 287,
    name: 'IBOX设备管理',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=9c578220c2e4fca53a942b34fd589ed1',
  },
  {
    agentId: 10349,
    appAgentId: 349,
    name: 'ITV设备管理',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=61b33f2622608391e303b8fd056cdd00',
  },
  {
    agentId: 10435,
    appAgentId: 361,
    name: '审批内侧',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10457,
    appAgentId: 365,
    name: '薄荷会议-QA',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10458,
    appAgentId: 366,
    name: 'znhys-QA',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10459,
    appAgentId: 367,
    name: '无线投屏-QA',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10461,
    appAgentId: 369,
    name: '测试服务号(勿动)',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=50abe425cba1f9895067a5f7185f8dbc',
  },
  {
    agentId: 10465,
    appAgentId: 373,
    name: '会议室预订_QA',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10466,
    appAgentId: 374,
    name: '票据夹',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=93695d264423c5e73638aa1db575f70c',
  },
  {
    agentId: 10483,
    appAgentId: 385,
    name: '度学堂-百度知识',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10681,
    appAgentId: 387,
    name: '审批8070',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=1ffa3554958a8b9ed3c9b1b4980cd38c',
  },
  {
    agentId: 10682,
    appAgentId: 388,
    name: '审批8020',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=0b7a5cd7a45d14786a5271733b372313',
  },
  {
    agentId: 10683,
    appAgentId: 389,
    name: '审批8050',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=8ba8fbb39c43e704e96764e18b5cf3f4',
  },
  {
    agentId: 10696,
    appAgentId: 390,
    name: 'family-知识流1',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=ebf8f5d85f8547a87b559523af6f4c38',
  },
  {
    agentId: 10710,
    appAgentId: 392,
    name: '简单小考',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=bb01dc3e75fad5ad8bbe94966131f4e2',
  },
  {
    agentId: 10781,
    appAgentId: 395,
    name: 'BPIT人效报告',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10802,
    appAgentId: 396,
    name: '同学圈',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=045e618a366aed7f794824c6357bffbd',
  },
  {
    agentId: 10847,
    appAgentId: 399,
    name: 'ITR 售后',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10848,
    appAgentId: 400,
    name: '临时token',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=664a0e901d8d8e412fdbc595d0bca67a',
  },
  {
    agentId: 10849,
    appAgentId: 401,
    name: 'ACE工时申请',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10850,
    appAgentId: 402,
    name: 'ACE工时申请8070',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10851,
    appAgentId: 403,
    name: 'ACE工时申请8020',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10852,
    appAgentId: 404,
    name: 'FaceKey-saas',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=eba7ed80ac9d83f35d66ea3fd6e285b3',
  },
  {
    agentId: 10853,
    appAgentId: 405,
    name: '派活应用RD',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10855,
    appAgentId: 407,
    name: 'EOP工作台',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10856,
    appAgentId: 408,
    name: '派活应用QA',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=null',
  },
  {
    agentId: 10859,
    appAgentId: 411,
    name: 'OKR周报8050',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=app-default-logo.png',
  },
  {
    agentId: 10860,
    appAgentId: 412,
    name: '派活应用QA（test）',
    icon: 'http://st01-ruliu-qa03.st01.baidu.com:8165/headImg?name=f8b54e856a087d8d2937551cd6c67657',
  },
];

const SortCard = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [cloneNode, setCloneNode] = useState<Node>();
  const [isDown, setIsDown] = useState(false);

  const [XY, setXY] = useState({
    x: 0,
    y: 0,
  });

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (!isParent(e.target, boxRef.current)) {
      return;
    }
    const X = e.clientX;
    const Y = e.clientY;
    setXY({ x: X, y: Y });
    setIsDown(true);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDown) {
        return;
      }
      const X = e.clientX - XY.x;
      const Y = e.clientY - XY.y;
      // @ts-ignore
      boxRef.current.style = `transition: none; position: absolute; transform: translate3d(${X}px, ${Y}px, 0px); z-index: 3000; top: 0; left: 0;`;
    },
    [isDown, XY],
  );

  const onMouseUp = (e: MouseEvent) => {
    setIsDown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [onMouseDown]);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseUp);
    };
  }, [onMouseUp]);

  return (
    <div
      className={styles.main}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      {/* <div className={styles.manageIcons}>
                {
                    iconList.map((item) => (
                        <div className={styles.iconBox} key={item.appAgentId}>
                            <div className={styles.iconImage}>
                                <img src={item.icon} alt="" />
                            </div>
                            <div className={styles.textName}>
                                {item.name}
                            </div>
                        </div>
                    ))
                }
            </div> */}
      <div className={styles.moveBox} ref={boxRef}>
        111
      </div>
    </div>
  );
};
export default SortCard;
