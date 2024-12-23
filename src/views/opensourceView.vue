<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="columns is-multiline is-gapless">
        <!-- 左邊 -->
        <div id="content_left" class="column mx-2 my-2">
            <aside class="menu fixed box">
                <p class="menu-label">
                    目錄 / Index
                </p>
                <ul class="menu-list">
                    <li><a href="#FSdifinition">自由軟體的四大定義</a></li>
                    <li><a href="#OpenSource">開放原始碼</a></li>
                    <li><a href="#License">開放授權&公眾授權</a></li>
                    <li><a href="#Reference">參考來源</a></li>
                </ul>
            </aside>
        </div>
        <!-- 中間 -->
        <div id="content_mid" class="column is-three-fifths mx-2 my-2">
            <div class="container content box">
                <h3 class="title is-3">關於開放原始碼</h3>
                <h6 class="subtitle is-6">About The Open Source</h6>
                <span class="tag is-info is-light mr-1">自由軟體</span>
                <span class="tag is-info is-light mr-1">開放授權</span>
                <span class="tag is-info is-light mr-1">開源文化</span>
                <hr>
                <h3 id="FSdifinition" class="title is-3">自由軟體的四大定義</h3>
                <h6 class="subtitle is-6">The Free Software Definition</h6>
                <p>
                    <sup><a id="r1" href="#s1">[1]</a></sup>
                    根據 Richard Stallman 和<a href="https://www.fsf.org/">自由軟體基金會（FSF）</a>的定義，
                    自由軟體賦予使用者四種自由特質：
                </p>
                <blockquote>
                    <ol start="0">
                        <li>不論目的為何，可以自由使用該軟體</li>
                        <li>可以自由再次分享（散布）該軟體以幫助其他人</li>
                        <li>可以自由研究軟體的運作，並可以修改它來貼近自己的需求</li>
                        <li>可以自由地該良軟體，修改後的版本也能自由散步分享、惠及公眾</li>
                    </ol>
                </blockquote>
                <p>
                    <span class="title is-5">同時具有以上四種自由特質的軟體，就被稱作「自由軟體」。</span><br />
                </p>
                <p>
                    <sup><a id="r2" href="#s2">[2]</a></sup>
                    自由軟體的使用者，可以不限目的／時間／地點／對象，不以獲利為主要目標，自由散布軟體的原版或改良版。
                    <br /><br />
                    如果使用者不必問任何人或是支付任何的授權費用從事這些行為，就表示自由軟體所賦予的自由權利。
                </p>
                <!-- <h4 class="title is-4">自由軟體也 <em>可以</em> 商業化</h4>
                        <h6 class="subtitle is-6">Free software <em>can</em> be commercial</h6>
                        <p>
                            自由軟體必須能作為商業使用、商業開發、與商業散布等。
                            如今商業開發的自由軟體已經相當常見，有這樣的自由商業軟體至關重要。
                            你可能需要付費取得某自由軟體的副本，但你也可能免費取得；無論你是怎樣取得軟體副本的，
                            你必然享有複製與改動該軟體的自由，甚至也能銷售該軟體的副本。
                            <sup><a id="r3" href="#s3">[3]</a></sup>
                        </p> -->

                <h3 id="OpenSource" class="title is-3">開放原始碼</h3>
                <h6 class="subtitle is-6">Open Source</h6>
                <p>
                    <sup><a id="r4" href="#s4">[4]</a></sup>
                    在 <a href="https://opensource.org/osd/">Open Source Initiavite</a> 網站中有對開放原始碼做出定義，
                    這邊取3個比較重要的：

                </p>
                <blockquote>
                    <ol>
                        <li>自由散布：不用經過他人的許可即可以自由地散布軟體</li>
                        <li>開放源碼：散布的軟體會附上完整的原始碼，或必須是有人們容易取得原始碼的管道</li>
                        <li>衍生著作：人們可以自由地修改原始碼，並依同一授權條款再發布</li>
                    </ol>
                </blockquote>
                <p>
                    <sup><a id="r5" href="#s5">[5]</a></sup>
                    大部分的人會將開放原始碼與自由軟體搞混，因為兩者重疊的地方很多。
                    雖然絕大部分的開源軟體也都符合自由軟體的定義，
                    但實際上兩者個規範不同，只要符合各自的規範，就屬於各自規範底下的軟體。
                    而自由軟體的規範比開放原始碼的定義更為嚴謹，因此所有的自由軟體也都是開放原始碼。
                </p>

                <h3 id="License" class="title is-3">開放授權&公眾授權</h3>
                <h6 class="subtitle is-6">Open License & Public License</h6>
                <p>
                    「開放授權」讓著作權所有者只保留部分權力，允許其作品可以被自由且不羨慕地的使用、修改和散布。
                    任何額外附加的條寬都不可牴觸授權原則。與「公共授權」相比，「開放授權」自由度更大。<br>
                    這些軟體程式碼常用的開放授權條款，從最嚴格的 GPL 類，到最寬鬆的 MIT／BSD 類，
                    只要和上述的定義不相悖，都可以被視為開放授權。
                </p>
                <span>從最嚴格到最寬鬆：</span>
                <ul>
                    <li>AGPL</li>
                    <li>GPL</li>
                    <li>LGPL</li>
                    <li>EPL／CPL</li>
                    <li>MPL／CDDL</li>
                    <li>Apache Lincese</li>
                    <li>MIT／BSD</li>
                </ul>

                <p>
                    「公眾授權」是創作者自願鬆綁著作權法嚴謹的限制，讓作品的應用更自由，
                    其再利用的自由程度取決於個別條款內容，人然可限制能不能夠商用或修改。
                </p>
                <div class="columns is-0">
                    <div class="column">
                        <sup><a id="r6" href="#s6">[6]</a></sup>
                        <span>著名的CC授權：</span>
                        <ul>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
                                    alt="" width="116" heigh="41" />
                                CC-0
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" alt=""
                                    width="116" heigh="41" />
                                CC-BY
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
                                    alt="" width="116" heigh="41" />
                                CC-BY-SA
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc.png"
                                    alt="" width="116" heigh="41" />
                                CC-BY-NC
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png"
                                    alt="" width="116" heigh="41" />
                                CC-BY-NC-SA
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nd.png"
                                    alt="" width="116" heigh="41" />
                                CC-BY-ND
                            </li>
                            <li>
                                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-nd.png"
                                    alt="" width="116" heigh="41" />
                                CC-BY-NC-ND
                            </li>
                        </ul>
                    </div>
                    <div class="column">
                        <span>各個代表的意思：</span>
                        <ul>
                            <li>
                                BY
                                <img src="https://mirrors.creativecommons.org/presskit/icons/by.xlarge.png" alt=""
                                    width="30" height="30">
                                姓名標示
                            </li>
                            <li>
                                SA
                                <img src="https://mirrors.creativecommons.org/presskit/icons/sa.xlarge.png" alt=""
                                    width="30" height="30">
                                相同方式分享
                            </li>
                            <li>
                                NC
                                <img src="https://mirrors.creativecommons.org/presskit/icons/nc.xlarge.png" alt=""
                                    width="30" height="30">
                                非商業性使用
                            </li>
                            <li>
                                ND
                                <img src="https://mirrors.creativecommons.org/presskit/icons/nd.xlarge.png" alt=""
                                    width="30" height="30">
                                禁止改作
                            </li>
                        </ul>
                    </div>
                </div>


                <h2 id="Reference" class="title is-3">參考來源</h2>
                <h6 class="subtitle is-6">Reference</h6>
                <div class="columns is-0">
                    <div class="column content">
                        <ol>
                            <li id="s1">
                                <a href="#r1">^</a>
                                <a href="https://zh.wikipedia.org/zh-tw/自由軟體" target="_blank">
                                    維基百科-自由軟體條目
                                </a>
                            </li>
                            <li id="s2">
                                <a href="#r2">^</a>
                                <a href="https://ocf.tw" target="_blank">
                                    開放文化基金會-宣傳海報
                                </a>
                            </li>
                            <li id="s3">
                                <a href="#r3">^</a>
                                <a href="https://www.gnu.org/philosophy/free-sw.html.en" target="_blank">
                                    GNU Operating System-What is Free Software
                                </a>
                            </li>
                            <li id="s4">
                                <a href="#r4">^</a>
                                <a href="https://opensource.org/osd/" target="_blank">
                                    Open Source Initiavite-Open Source Definition
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div class="column content">
                        <ol start="5">
                            <li>
                                <a href="#r5">^</a>
                                <a href="https://zh.wikipedia.org/zh-tw/開放原始碼" target="_blank">
                                    維基百科-開放原始碼條目
                                </a>
                            </li>
                            <li>
                                <a href="#r6">^</a>
                                <a href="https://creativecommons.org/about/cclicenses/" target="_blank">
                                    CC Creative Commons-Avout CC Licenses
                                </a>
                            </li>
                            <!-- <li>
                                        <a href="#r7">^</a>
                                        <a href=""></a>
                                    </li>
                                    <li>
                                        <a href="#r8">^</a>
                                        <a href=""></a>
                                    </li> -->
                        </ol>
                    </div>
                </div>

                <!-- 頁尾宣告 -->
                <blockquote>
                    作者：羅崧瑋 @ <a href="https://github.com/TTUSSC/" target="_blank" rel="TTUSSC">TTUSSC</a><br />
                    版權聲明：<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">CC BY-SA 4.0</a><br />
                    有誤之處以及侵權之處，還請通知。本人會盡快處理。
                </blockquote>
                <button class="button is-info is-light" onclick="window.location.href='#'">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa-solid fa-arrow-up"></i>
                        </span>
                        <span>回頂部</span>
                    </span>
                </button>
            </div>
        </div>
        <!-- 右邊 -->
        <div id="content_right" class="column mx-2">

        </div>
    </div>
</template>