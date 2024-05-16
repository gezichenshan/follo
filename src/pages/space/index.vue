<script setup lang="ts">
</script>

<template>
  <div class="main">
    <h1 class="main-title">
      个人主页
    </h1>

    <div class="main-body">
      <div class="body-left">
        <img class="img-avatar" src="https://avatars.githubusercontent.com/u/30552622?v=4" alt="">
        <div class="profile-container">
          <span class="txt-spacename">周毅 · 叁镜教育</span>
          <span class="txt-workingyear">工作年限：5年</span>
          <span class="txt-spacepath">https://follo.top/jooyyy</span>
          <div class="tags-container">
            <div class="txt-tag">
              北美留学
            </div>
            <div class="txt-tag">
              背景提升
            </div>
            <div class="txt-tag">
              耐心负责
            </div>
          </div>
        </div>

        <div class="organization-container">
          <h3>公司</h3>
          <div class="d-flex flex-wrap">
            <div class="organization-item">
              <img src="https://avatars.githubusercontent.com/u/98136135?s=64&v=4" alt="">
            </div>
          </div>
        </div>

        <div class="media-container">
          <h3>内容平台</h3>
          <div class="d-flex flex-wrap">
            <a class="media-item" href="https://www.xiaohongshu.com/user/profile/6643258b000000000700424c" target="_blank">
              <img src="@/../public/logo-redbook.png" alt="">
            </a>
            <a class="media-item" href="https://www.douyin.com/user/MS4wLjABAAAAeWnQ-nc9HilmjDgueLsyAGN_SrWKJIWxb_vwMnald9Y" target="_blank">
              <img src="@/../public/logo-douyin.png" alt="">
            </a>
            <a class="media-item" href="https://www.douban.com/people/jooyyy/" target="_blank">
              <img src="@/../public/logo-douban.png" alt="">
            </a>
            <a class="media-item" href="https://www.zhihu.com/people/jooyyy" target="_blank">
              <img src="@/../public/logo-zhihu.png" alt="">
            </a>
          </div>
        </div>

        <div class="achievement-container">
          <h3>成就</h3>
          <div class="d-flex flex-wrap">
            <div class="archieve-item">
              <img
                src="https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png"
                alt=""
              >
            </div>
            <div class="archieve-item">
              <img src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" alt="">
            </div>
            <div class="archieve-item">
              <img
                src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
                alt=""
              >
            </div>
            <div class="archieve-item">
              <img src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" alt="">
            </div>
            <div class="archieve-item">
              <img
                src="https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
      <div class="body-right">
        <div class="hi-container">
          <div class="title-wrap">
            <span>jooyyy/README.md</span>
            <a-button type="ghost">
              <EditOutlined />
            </a-button>
          </div>
          <article>
            <h3>Hi there 👋</h3>
            <p>从业两年，金融学专业毕业，精通港/新/英/澳留学特点，擅长剖析申请逻辑，挖掘学生内心想法，根据学生不同的诉求，以终为始，制定高度个性化的留学方案，全程跟踪，耐心负责。帮助学生拿到包含NUS、HKU、NTU、CHHK等世界名校offer录取</p>
          </article>
        </div>
        <div class="share-container">
          <h3>近期分享</h3>
          <div class="share-list">
            <div class="share-item">
              <div class="img-wrap">
                <img class="img-thumb" src="@/../public/tmp-share-item.jpg" alt="">
              </div>
              <div class="info-wrap">
                <h4>如何写好一篇留学文书</h4>
                <div class="info-tag-wrap">
                  <span>#留学</span>
                  <span>#文书</span>
                  <span>#申请提交</span>
                </div>
                <p class="txt-desc">
                  直播已结束 | 32人已报名
                </p>
                <div class="info-bottom-wrap">
                  <div class="price-wrap">
                    <div class="market-price">
                      ¥50<s>￥99</s>
                    </div>
                  </div>
                  <a-button class="btn-buy" type="ghost">
                    购买
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="case-container">
          <h3>案例</h3>
          <div class="d-flex flex-wrap">
            <a-tabs v-model:activeKey="activeKey">
              <a-tab-pane key="1" tab="全部" />
              <a-tab-pane key="2" tab="985院校" />
              <a-tab-pane key="3" tab="211院校" />
              <a-tab-pane key="4" tab="双非双一流" />
              <a-tab-pane key="5" tab="海本" />
            </a-tabs>
          </div>
          <div class="d-flex flex-wrap case-list">
            <a class="case-item" href="" target="_blank">
              <div class="top-wrap">
                <img src="https://logo.compassedu.hk/34.png?imageMogr2/thumbnail/!50p/blur/1x0/quality/50" alt="">
                <h4 class="txt-line-2">伯明翰大学全球能源技术与系统理学硕士研究生offer一枚</h4>
              </div>
              <div class="detail-wrap">
                <div class="rows">
                  <div class="txt-label">学生姓名</div>
                  <div class="txt-line-1 txt-value">周同学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">毕业学校</div>
                  <div class="txt-line-1 txt-value">中山大学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">本科专业</div>
                  <div class="txt-line-1 txt-value">化学工程与工艺</div>
                </div>
                <div class="rows">
                  <div class="txt-label">基本背景</div>
                  <div class="txt-line-1 txt-value">大四，GPA3.12，雅思6.5，待考</div>
                </div>
              </div>
            </a>
            <a class="case-item" href="" target="_blank">
              <div class="top-wrap">
                <img src="https://logo.compassedu.hk/34.png?imageMogr2/thumbnail/!50p/blur/1x0/quality/50" alt="">
                <h4 class="txt-line-2">伯明翰大学全球能源技术与系统理学硕士研究生offer一枚</h4>
              </div>
              <div class="detail-wrap">
                <div class="rows">
                  <div class="txt-label">学生姓名</div>
                  <div class="txt-line-1 txt-value">周同学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">毕业学校</div>
                  <div class="txt-line-1 txt-value">中山大学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">本科专业</div>
                  <div class="txt-line-1 txt-value">化学工程与工艺</div>
                </div>
                <div class="rows">
                  <div class="txt-label">基本背景</div>
                  <div class="txt-line-1 txt-value">大四，GPA3.12，雅思6.5，待考</div>
                </div>
              </div>
            </a>
            <a class="case-item" href="" target="_blank">
              <div class="top-wrap">
                <img src="https://logo.compassedu.hk/34.png?imageMogr2/thumbnail/!50p/blur/1x0/quality/50" alt="">
                <h4 class="txt-line-2">伯明翰大学全球能源技术与系统理学硕士研究生offer一枚</h4>
              </div>
              <div class="detail-wrap">
                <div class="rows">
                  <div class="txt-label">学生姓名</div>
                  <div class="txt-line-1 txt-value">周同学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">毕业学校</div>
                  <div class="txt-line-1 txt-value">中山大学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">本科专业</div>
                  <div class="txt-line-1 txt-value">化学工程与工艺</div>
                </div>
                <div class="rows">
                  <div class="txt-label">基本背景</div>
                  <div class="txt-line-1 txt-value">大四，GPA3.12，雅思6.5，待考</div>
                </div>
              </div>
            </a>
            <a class="case-item" href="" target="_blank">
              <div class="top-wrap">
                <img src="https://logo.compassedu.hk/34.png?imageMogr2/thumbnail/!50p/blur/1x0/quality/50" alt="">
                <h4 class="txt-line-2">伯明翰大学全球能源技术与系统理学硕士研究生offer一枚</h4>
              </div>
              <div class="detail-wrap">
                <div class="rows">
                  <div class="txt-label">学生姓名</div>
                  <div class="txt-line-1 txt-value">周同学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">毕业学校</div>
                  <div class="txt-line-1 txt-value">中山大学</div>
                </div>
                <div class="rows">
                  <div class="txt-label">本科专业</div>
                  <div class="txt-line-1 txt-value">化学工程与工艺</div>
                </div>
                <div class="rows">
                  <div class="txt-label">基本背景</div>
                  <div class="txt-line-1 txt-value">大四，GPA3.12，雅思6.5，待考</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
  width: 100%;
  min-width: 0;
  max-width: 1264px;
  margin: auto;
  padding: 0 32px;

  .main-title {
    font-size: 28px;
  }

  .main-body {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
  }

  .body-left {
    grid-column: 1;
    width: 260px;
    height: 100%;
    background-color: #fff;
  }

  .img-avatar {
    border-radius: 50%;
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;

    span {
      display: block;
    }

    .txt-spacename {
      font-size: 20px;
      font-weight: 600;
    }

    .txt-spacepath {
      font-size: 14px;
      color: #666666;
    }

    .txt-workingyear {
      font-size: 14px;
      color: #333333;
    }

    .tags-container {
      display: block;

      .txt-tag {
        display: inline-block;
        padding: 2px 10px;
        text-align: center;
        background-color: rgb(215, 251, 183);
        margin-left: 5px;
        margin-top: 5px;
        line-height: 34px;
        border-radius: 17px;
      }
    }
  }

  .achievement-container {
    padding: 16px 0;

    h3 {
      margin-bottom: 8px;
    }

    .archieve-item {
      position: relative;
      width: 64px;
      height: 64px;
      border-radius: 32px;
      overflow: hidden;
    }
  }

  .organization-container {
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;

    h3 {
      margin-bottom: 8px;
    }

    .organization-item {
      width: 64px;
      height: 64px;
    }
  }

  .media-container {
    padding: 16px 0;
    border-bottom: 1px solid #f0f0f0;

    h3 {
      margin-bottom: 8px;
    }

    .media-item {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      overflow: hidden;
    }
  }

  .d-flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .body-right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .hi-container {
    background-color: #fff;
    padding: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;

    .title-wrap {
      display: flex;
      justify-content: space-between;
    }
  }

  .share-container {
    background-color: #fff;
  }

  .share-list {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 20px;
  }

  .share-item {
    box-sizing: border-box;
    width: 394px;
    height: 158px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 30px 0 rgba(238, 242, 245, 0.8);
    overflow: hidden;
    display: flex;

    .img-wrap {
      overflow: hidden;

      .img-thumb {
        width: 120px;
      }
    }

    .info-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;

      .info-tag-wrap {
        span {
          margin-left: 4px;
          height: 26px;
          padding: 0 6px;
          text-align: center;
          line-height: 26px;
          background: #f2f3f6;
          border-radius: 3px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 400;
          color: #888;
        }
        span:first-child {
          margin-left: 0;
        }
      }

      .txt-desc {
        margin-top: 6px;
        font-size: 14px;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .info-bottom-wrap {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price-wrap {
          .market-price {
            font-size: 18px;
            font-weight: 500;
            color: #fa8919;
            line-height: 20px;

            s {
              font-size: 14px;
              font-weight: 400;
              color: #b2b2b2;
              margin-left: 4px;
            }
          }
        }

        .btn-buy {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 26px;
          padding: 0 12px;
          background: #fbf5ee;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 500;
          color: #fa8919;
          line-height: 26px;
          cursor: pointer;
        }
      }
    }
  }

  .case-container {
    display: flex;
    flex-direction: column;

    .case-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      padding: 0 !important;
      margin-top: 20px;
      gap: 20px;

      .case-item {
        width: 30%;
        padding: 15px;
        gap: 10px;
        background: var(--bg-default-color);
        border-radius: 4px;
        border: 1px solid var(--border-default-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        transition: all 0.3s ease;
        overflow: hidden;
        text-decoration: none;
        border: 1px solid #f0f0f0;

        .top-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;

          img {
            width: 44px;
            height: 44px;
          }

          .txt-line-1 {
            text-overflow: ellipsis;
            text-overflow: -o-ellipsis-lastline;
            -moz-binding: url(ellipsis.xml#ellipsis);
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }

          .txt-line-2 {
            text-overflow: ellipsis;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          h4 {
            flex: 1;
            margin-left: 5px;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            word-break: normal !important;
            text-align: left !important;
            overflow: hidden;
            display: -webkit-box;
            color: #333333;
            text-align: justify;
          }
        }

        .detail-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .rows {
            display: flex;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;

            .txt-label {
              color: #999999;
              margin-right: 5px;
            }

            .txt-value {
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
