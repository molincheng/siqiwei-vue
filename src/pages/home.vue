<template>
    <div>
     <swiper
          :autoplay="swiper_options.autoplay"
          :loop="swiper_options.loop"
          :speed="swiper_options.speed"
          :pagination="swiper_options.pagination"
          :navigation="swiper_options.navigation"
          :spaceBetween="swiper_options.spaceBetween"
          :coverflowEffect="swiper_options.coverflowEffect"
          :centeredSlides="swiper_options.centeredSlides"
          :slidesPerView="swiper_options.slidesPerView"
          class="swiper"
          effect="coverflow">
      <swiper-slide v-for="(item,i) in 4" :key="i">
          <img class="siper_img" src="@/assets/image/banner1.png" />
      </swiper-slide>
  <div class="swiper-pagination"></div>

  <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>

  <div class="g-tit" role="小标题" >
			<div class="m-tit center">
				<ul v-animate="'fadeInUp'">
					<li>
						<router-link to="javascript:;">
							<img src="@/assets/image/tit1.png"  />
						</router-link>
						<div>
							<h3>校企联合共建</h3>
							<p>提供专业家庭教育咨询</p>
						</div>
					</li>
					<li>
						<router-link to="javascript:;">
							<img src="@/assets/image/tit2.png"  />
						</router-link>
						<div>
							<h3>名师助教团队</h3>
							<p>专注领域 专业团队</p>
						</div>
					</li>
					<li>
						<router-link to="javascript:;">
							<img src="@/assets/image/tit3.png" />
						</router-link>
						<div class="">
							<h3>双师围绕教学</h3>
							<p>专属制定家庭学习计划</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

    <div class="g-att" role="免费领取领取试听课">
			<div class="m-att center">
				<h1>启思维教育专注于3-18岁家庭成长教育</h1>
				<div  class="clear">
					<ul v-animate="'fadeInUp'">
						<li>
							<h1><span id="num1">36</span><sub>+</sub></h1>
							<p>国内地区遍布学员</p>
						</li>
						<li>
							<h1><span id="num2">10000</span><sub>+</sub></h1>
							<p>付费学员</p>
						</li>
						<li>
							<h1><span id="num3">100</span><sub>%</sub></h1>
							<p>教授科研团队</p>
						</li>
						<li>
							<h1><span id="num4">30</span><sub>+</sub></h1>
							<p>资深专业导师</p>
						</li>
					</ul>
				</div>
				<a href="javascript:;">免费领取试听课</a>
				<p>以上数据为内部统计</p>
			</div>
		</div>


    <div class="g-why" role="为什么要在启思维学习">
			<div class="m-why center">
				<h1>为什么要在启思维学习</h1>
				<ul v-animate="'fadeInUp'">
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why1.png" alt=""></a>
				    	<p>100%名师教授课研团队</p>
				    </li>
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why2.png" alt=""></a>
				    	<p>权威辅导教材与深度自主研发相结合</p>
				    </li>
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why3.png" alt=""></a>
				    	<p>智能测评与大数据应用提升学习效率</p>
				    </li>
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why4.png" alt=""></a>
				    	<p>1对1在线导师助学，随时随地学习</p>
				    </li>
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why5.png" alt=""></a>
				    	<p>资深的专业助学导师团队</p>
				    </li>
				    <li>
				    	<a href="javascript:;"><img src="@/assets/image/why6.png" alt=""></a>
				    	<p>在线+社群式学习，打造无缝隙学习环境</p>
				    </li>
				</ul>
			</div>
		</div>

    <div class="g-video" role="播放视频">
			<div class="m-video center">
				<h1>7位明星大咖 携手助力启思维教育隆重上线</h1>
				<p>我们为您的家庭提供高品质教学服务</p>
				<div>
					<a href="javascript:;" id="play">播放视频</a>
					<a href="javascript:;">了解启思维教育</a>
				</div>
			</div>
		</div>

		<div class="g-test" role="测试">
			<div class="m-test center">
				<h1>“启迪计划” 独家测评系统</h1>
				<p>科技赋能守护家庭的每一个环节，为每个家庭提供真实可靠的测评建议，找出家庭教育困惑的根源</p>
				<div>
					<div v-animate.solo="'fadeInLeft'">
						<a href="javascript:;"><img src="@/assets/image/test1.png" alt=""></a>
						<p>家长测评</p>
					</div>
					<div v-animate.solo="'fadeInRight'">
						<a href="javascript:;"><img src="@/assets/image/test2.png" alt=""></a>
						<p>孩子测评</p>
					</div>
				</div>
				<a href="javascript:;">查看详情</a>
				<p>*通过大数据和人工智能检测并建立个性化学习路径</p>
			</div>
		</div>

		<div class="g-plan" role="计划">
			<div class="m-plan center">
				<h1>启迪计划 服务流程</h1>
				<ul v-animate="'fadeInUp'">
				    <li>
				    	<div><img src="@/assets/image/plan1.png" alt=""></div>
				    	<h1>导学测试</h1>
				    	<p>360度家长与孩子的测评老师</p>
				    </li>
				    <li>
				    	<div><img src="@/assets/image/plan2.png" alt=""></div>
				    	<h1>方案定制</h1>
				    	<p>定制60天专属辅导方案</p>
				    </li>
					<li>
				    	<div><img src="@/assets/image/plan3.png" alt=""></div>
				    	<h1>选派导师</h1>
				    	<p>选派一对一专属辅导老师</p>
				    </li>
					<li>
				    	<div><img src="@/assets/image/plan4.png" alt=""></div>
				    	<h1>辅导授课</h1>
				    	<p>专属授课导师二对一</p>
				    </li>
					<li class="m0">
				    	<div><img src="@/assets/image/plan5.png" alt=""></div>
				    	<h1>成果测评</h1>
				    	<p>严格监控教学成果</p>
				    </li>
				</ul>
			</div>
		</div>

		<div class="g-commitment" role="承诺">
			<div class="m-commitment center">
				<h1>我们的承诺</h1>
				<p>一切为了孩子的未来</p>
				<ul v-animate="'fadeInUp'">
				    <li>
				    	<a href="javascript:;">
							<h1>免费360度测评</h1>
							<p>新用户我们提供免费360度家长与孩子的测评诊断，让你快速找到家庭教育困惑的根源</p>
				    	</a>
				    </li>
				    <li>
				    	<a href="javascript:;">
							<h1>二对一专属指导</h1>
							<p>专家导师量身定制专属辅导方案，二对一导师专属指导教学，保障方案课程专属性</p>
				    	</a>
				    </li>
				    <li>
				    	<a href="javascript:;">
							<h1>服务 承诺</h1>
							<p>付费后，每个家庭都会与启思维签订一份课程服务协议，我们向学员保障服务水平</p>
				    	</a>
				    </li>
				    <li>
				    	<a href="javascript:;">
							<h1>师资 承诺</h1>
							<p>启思维坚持名师助教的教学理念，我们保证师资的优质教学水平</p>
				    	</a>
				    </li>
				</ul>
			</div>
		</div>

		<div class="g-guild" role="如何免费试听">
			<div class="m-guild center">
				<h1>如何免费体验试听课</h1>
				<ul v-animate="'fadeInUp'">
				    <li>
				    	<div><img src="@/assets/image/guild3.png" alt=""></div>
				    	<h1>注册免费领取</h1>
				    	<h1>价值388元试听课</h1>
				    	<p>注册后我们会尽快与您联系</p>
				    </li>
				    <li>
				    	<div><img src="@/assets/image/guild2.png" alt=""></div>
				    	<h1>为您安排预约</h1>
				    	<p>您的专属导师会及时与您联络，为您与您的孩子 安排测评及家庭教育试听课程</p>
				    </li>
				    <li class="m0">
				    	<div><img src="@/assets/image/guild1.png" alt=""></div>
				    	<h1>进入在线教室开始上课</h1>
				    	<p>关注启思维服务号，开始上课</p>
				    </li>
				</ul>
				<a href="javascript:;">查看详情</a>
			</div>
		</div>

		<div class="g-partner" role="合作伙伴">
			<div class="m-partner center">
				<h1>学术合作</h1>
				<a href="javascript:;"><img src="@/assets/image/partner.png" alt=""></a>
			</div>
		</div>
    </div>
</template>

<script>
import wow from '@/assets/js/wow.js'
import { reactive, onMounted } from 'vue';
import SwiperCore, { Autoplay, Pagination, EffectCoverflow,Navigation } from "swiper/swiper.esm.js";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay, Pagination, EffectCoverflow,Navigation]);
export default {
    components:{
       Swiper,
       SwiperSlide
    },
    setup() {
		onMounted(()=>{
			new wow.WOW().init()
		})
        let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 2000, //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: "auto", //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
      spaceBetween: 20,
      coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      navigation: {
        nextElRef: ".swiper-button-next",
        prevElRef: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
      },
    });
    // 将swiper_options返回给模板中的swiper组件使用
    return { swiper_options };

  }
}

</script>

<style>
.siper_img {
   width: 100%;
   height: 100%;
}  
.swiper-pointer-events{
    position: relative;
    overflow: hidden;
}
</style>