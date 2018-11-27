<template>
	<div class="u-faq-bg">
		<div class="container py-4">
			<div class="row justify-content-center">
				<div class="col-12">
					<h5 class="my-4"><b>也許你想問</b></h5>
					<div id="accordion" class="mb-4">
						<div class="card">
					    <div class="card-header" id="headingOne">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					          關於我們
					        </button>
					      </h5>
					    </div>
					    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
					      <div class="card-body">
					      	NL Xmas Store是一個神秘的購物平台。<br>一年只營業12月25日這一天，也許老闆真的是聖誕老人也說不定。
					      </div>
					    </div>
					  </div>
					  <div class="card">
					    <div class="card-header" id="headingTwo">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					          關於到貨時間
					        </button>
					      </h5>
					    </div>
					    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
					      <div class="card-body">
					      	聖誕老人會在12月25日~12月26日把你購買的物品放到襪子裡<br>沒收到？也許你該問問爸媽在幹嘛
					      </div>
					    </div>
					  </div>
					  <div class="card">
					    <div class="card-header" id="headingThree">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
					          商品指南
					        </button>
					      </h5>
					    </div>
					    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
					      <div class="card-body">
					      	我們有魯蛇專區；聖誕節一個人的你可以擺脫孤單<br>
									我們也有情人專區；欸欸聖誕節了，買男友嗎?<br>
									當然我們也有跟朋友一起歡聚的團聚專區，聖誕節就是要交換禮物嘛<br>
									<router-link class="btn btn-info text-white mt-2" to="/">選購去</router-link>
					      </div>
					    </div>
					  </div>
					  <div class="card">
					    <div class="card-header" id="headingFour">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
					          老闆想說的話
					        </button>
					      </h5>
					    </div>
					    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
					      <div class="card-body">
					      	I gave you everything. You gave me anything<br>
									偷偷告訴你，輸入happynewyears會打折<br>
									<router-link class="btn btn-info text-white mt-2" to="/">選購去</router-link>
					      </div>
					    </div>
					  </div>
					</div>
					<a class="btn btn-info text-white mt-2" href="#"  @click.prevent="beforePath()">Back</a>
				</div>
			</div>
		</div>
	</div>
		
</template>

<script>
export default {
	data(){
		return {}
	},
	methods: {
		beforePath() {
			this.$router.back();
		}
	}
}
</script>

<style>
.u-faq-bg{
	background: url('../../static/image/yellow-wall.jpg');	
	background-size: cover;
	-webkit-background-size: cover;
	background-position: center;
}
.u-faq-bg:before{
	content: "";
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	background-color: rgba(256,256,256,0.3);
}
</style>