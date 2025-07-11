<template>
  <view
    class="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 py-6"
  >
    <view class="mx-4 rounded-2xl bg-white/90 shadow-lg p-6">
      <!-- 标题与简介 -->
      <text
        class="block text-6xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 tracking-wide"
      >
        汽车商城
      </text>
      <text class="block text-lg text-gray-600 dark:text-gray-300 mb-4">
        发现心仪座驾,开启智能出行新生活。我们为您提供丰富车型选择、灵活购车方案与贴心售后服务。
      </text>
      <!-- 特色服务标签 -->
      <view class="flex flex-wrap gap-2 mb-4">
        <wd-tag type="primary" plain>新车速递</wd-tag>
        <wd-tag type="success" plain>0首付购车</wd-tag>
        <wd-tag type="warning" plain>限时优惠</wd-tag>
        <wd-tag type="primary" plain>售后保障</wd-tag>
        <wd-tag type="danger" plain>金融分期</wd-tag>
      </view>
      <!-- 推荐车型 -->
      <view class="mb-6">
        <text
          class="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2"
          >推荐车型</text
        >
        <wd-cell-group>
          <wd-cell
            title="特斯拉 Model 3"
            label="智能纯电,续航600km,限时优惠"
            value="￥23.99万"
          />
          <wd-cell
            title="比亚迪 汉EV"
            label="高性能电驱,舒适空间"
            value="￥21.58万"
          />
          <wd-cell
            title="大众 ID.4"
            label="德系品质,智能互联"
            value="￥19.99万"
          />
          <wd-cell
            title="理想 L7"
            label="家庭旗舰SUV,超长续航"
            value="￥31.98万"
          />
        </wd-cell-group>
      </view>
      <!-- 购车流程 -->
      <view class="mb-6">
        <text
          class="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2"
          >购车流程</text
        >
        <view class="flex flex-col gap-2">
          <view class="flex items-center gap-2">
            <wd-icon name="search" size="20" class="text-blue-500" />
            <text class="text-gray-700 dark:text-gray-300"
              >1. 浏览车型,筛选心仪车辆</text
            >
          </view>
          <view class="flex items-center gap-2">
            <wd-icon name="edit" size="20" class="text-blue-500" />
            <text class="text-gray-700 dark:text-gray-300"
              >2. 在线咨询,获取专属报价</text
            >
          </view>
          <view class="flex items-center gap-2">
            <wd-icon name="cart" size="20" class="text-blue-500" />
            <text class="text-gray-700 dark:text-gray-300"
              >3. 选择金融方案,提交订单</text
            >
          </view>
          <view class="flex items-center gap-2">
            <wd-icon name="car" size="20" class="text-blue-500" />
            <text class="text-gray-700 dark:text-gray-300"
              >4. 线下提车,享受售后服务</text
            >
          </view>
        </view>
      </view>
      <!-- 常见问题 -->
      <view class="mb-6">
        <text
          class="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2"
          >常见问题</text
        >
        <wd-collapse>
          <wd-collapse-item title="购车需要哪些材料？" name="materials">
            <text>身份证、驾驶证、银行卡等基础材料,具体以客服指引为准。</text>
          </wd-collapse-item>
          <wd-collapse-item title="支持哪些金融方案？" name="finance">
            <text>支持全款、分期、0首付等多种灵活金融方案。</text>
          </wd-collapse-item>
          <wd-collapse-item title="售后服务有哪些？" name="after-sales">
            <text>提供整车质保、免费保养、24小时道路救援等服务。</text>
          </wd-collapse-item>
        </wd-collapse>
      </view>
      <!-- 底部按钮 -->
      <wd-button type="primary" block round class="mt-6">立即选购</wd-button>
    </view>
    <view class="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
      © 2024 汽车商城 - 智能出行,触手可及
    </view>
  </view>
</template>
