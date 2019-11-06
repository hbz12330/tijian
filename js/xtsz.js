$(document).ready(function(){
  var url=decodeURI(window.location.href);
  var fr=url.split('?czy=');
  var czy=fr[1].substring(0,11);
   $(".foot").html(`<div class="Outside">
   <div class="title">医院信息设置</div>
    <div class="fboot">
     <div><input id="ming" placeholder="请输入医院的名称"></div>
     <div><input id="tel" type="Number"  placeholder="请输入医院的电话"></div>
     <div><textarea id="dizhi" cols=50 maxlength=30 placeholder="请输入医院的地址" rows number=1 style="margin:5px 0 0 0"></textarea></div>   
     <div><textarea id="text" cols=50 maxlength=3000 placeholder="请输入医院介绍"></textarea></div> 
     <div><button>信息提交</button></div>
    </div>
   </div>`)
   $("#kssz").click(function(){
    $(".foot").html("")
    $(".foot").html(`<div>span</div>`)
    $(".foot").html(`<div class="Outside">
     <div class="title">科室设置</div>
     <div class="fboot">
      <div><input id="ming" placeholder="请输入科室的名称"></div>
      <div><input id="tel" type="Number"  placeholder="请科室电话"></div>
      <div><input type="text"  placeholder="科室负责人"></div>   
      <div><textarea id="text" cols=50  placeholder="科室医生"></textarea></div> 
      <div><button>信息提交</button></div>
     </div>
     </div>`)
   })
   $("#xxsz").click(function(){
    $(".foot").html("")
     $(".foot").html(`<div class="Outside">
      <div class="title">医院信息设置</div>
      <div class="fboot">
      <div><input id="ming" placeholder="请输入医院的名称"></div>
      <div><input id="tel" type="Number"  placeholder="请输入医院的电话"></div>
      <div><textarea id="dizhi" cols=50 maxlength=30 placeholder="请输入医院的地址" rows number=1 style="margin:5px 0 0 0"></textarea></div>   
      <div><textarea id="text" cols=50 maxlength=3000 placeholder="请输入医院介绍"></textarea></div> 
      <div><button>信息提交</button></div>
      </div>
     </div>`)
    }) 
   $("#lmsz").click(function(){
    $(".foot").html("")
    $(".foot").html(`<div class="Outside">
     <div class="title">类目设置</div>
     <div class="fboot">
     <div><input id="ming" placeholder="类目名称"></div>
     <div><input id="jia" type="Number"  placeholder="类目单价"></div>
     <div><button>信息提交</button></div>
     </div>
    </div>`)
   })
   $("#czsz").click(function(){
    $(".foot").html("")
    $(".foot").html(`<div class="Outside">
     <div class="title">操作员设置</div>
     <div class="fboot">
     <div><input id="ming" placeholder="操作员姓名"></div>
     <div><input id="password" placeholder="操作员密码"></div>
     <div><input id="passwordA" placeholder="确认密码"></div>
     <div><input id="bianhao" placeholder="操作员工号"></div>   
     <div><button>信息提交</button></div>
     </div>
    </div>`)
   })
   $("#ksys").click(function(){
    $(".foot").html("")
    $(".foot").html(`<div class="Outside">
     <div class="title">医生设置</div>
     <div class="fboot">
     <div><input id="ks" placeholder="科室"></div>
     <div><textarea id="ys" cols=50 maxlength=3000 placeholder="科室医生"></textarea></div>  
     <div><button>信息提交</button></div>
     </div>
    </div>`)
   })
   $("#xtsy").click(function(){
     window.location.href="../html/glsz.html?uname="+czy;
   })
   $("#tcdl").click(function(){
    window.location.href="../index.html"
   })
})