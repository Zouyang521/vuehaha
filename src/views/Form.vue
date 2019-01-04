<template>
	<el-row>
		<el-col :span="8" :offset="8">
	<el-form :model="form" ref="form"  label-width="80px" style="margin-top: 90px;"  
	>
	    <el-form-item label="活动名称">
	        <el-input v-model="form.name"></el-input>
	    </el-form-item>
	    <el-form-item label="活动区域">
	        <el-select v-model="form.region">
	            <el-option label-position="left" label="上海" value="shanghai"></el-option>
	            <el-option label="北京" value="beijing"></el-option>
	        </el-select>
	    </el-form-item>
	    <el-form-item label="活动时间">
	        <el-col :span="11">
	            <el-date-picker v-model="form.date1" type="date" 
	            style="width: 100%"></el-date-picker>
	        </el-col>
	        <el-col class="line" :span="2">-</el-col>
	        <el-col :span="11">
	        	<el-time-picker type="fixed-time" placeholder="选择日期" 
	        	v-model="form.date2" style="width: 100%"></el-time-picker>
	        </el-col>
	    </el-form-item>
	    <el-form-item label="即时配送">
	        <el-switch v-model="form.delivery" active-color="#13ce66"></el-switch>
	    </el-form-item>
	    <el-form-item label="活动性质">
	        <el-checkbox-group v-model="form.type">
	            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
	            <el-checkbox label="地推活动" name="type"></el-checkbox>
	            <el-checkbox label="线下活动" name="type"></el-checkbox>
	            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
	        </el-checkbox-group>
	    </el-form-item>
	    <el-form-item>
	        <el-button type="primary" @click="onSubmit">立即创建</el-button>
	        <el-button>取消</el-button>
	    </el-form-item>
	</el-form>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				form:{
					name:'',
					region:'',
					type:[],
					delivery:false
				}
			}
		},
		methods:{
			onSubmit(){
				alert("呵呵,点我做什么")
			}
		}
	}
</script>
<style>
	
</style>