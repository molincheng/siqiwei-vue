<template>
   <div class="g-head clear" :class="{'hidden':downScroll}" role="头部">
            <div class="center m-head">
                <div class="m-head-1">
                    <router-link to=""><img src="@/assets/image/logo.png" title="启思维"></router-link>
                </div>
                <div class="m-head-2">
                    <ul class="left">
                        <li><router-link to="/">首页</router-link></li>
                        <li><router-link to="/mszz">名师师资</router-link></li>
                        <li><router-link to="/system">课程体系</router-link></li>
                        <li><router-link to="/mfcp">免费测评 </router-link></li>
                        <li><router-link to="">家长学堂</router-link></li>
                        <li><router-link to="/rhsk">如何上课 </router-link></li>
                        <li><router-link to="/about">关于我们</router-link></li>   
                        <span></span> 
                    </ul>
                    <div class="left">
                        <router-link to="">登录</router-link>
                        <router-link to="">免费领取试听课</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="g-foot" role="脚" :class="{'hidden_footer':!footerShow}">
			<div class="m-foot center">
				<h1>免费领取价值<em>388元</em>试听课</h1>
				<form action="" method="" accept-charset="utf-8">
					<input type="text" name="" placeholder="请输入您的手机号码">
					<input type="submit" value="立刻领取">
				</form>
			</div>
			<span></span>
		</div>
</template>

<script>
import {ref,onMounted} from 'vue'

    export default{
        setup(props) {
            let downScroll=ref(false)
            let footerShow=ref(false)
            
            let scrollValue=0
            let newScrollValue=0
            
            document.addEventListener('scroll',e=>{
                  let pageY= scrollValue=window.pageYOffset

                  console.log(pageY)

                  if(pageY<50||(pageY+document.documentElement.clientHeight)>(document.documentElement.offsetHeight-50)){
                      console.log('对了')
                        footerShow.value=false
                  }else{
                      footerShow.value=true
                  }

                  if(newScrollValue>scrollValue){//往下滚动
                        downScroll.value=false
                  }else{//往上滚动
                        downScroll.value=true
                  }
                setTimeout(()=>{
                    newScrollValue=scrollValue
                },0)

            })
            return{
                downScroll,
                footerShow
            }
        }
    }
</script>

<style scoped>
    .hidden{
        height: 0 !important;
       
    }
    .g-head{
         overflow: hidden;
        transition: all .5s ease;
    }
    .g-foot{
        transition: all .5s ease;
        z-index:20;
    }
    .hidden_footer{
        transform: translateY(80px) !important;
    }
</style>