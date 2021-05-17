import { Access } from 'umi';
import { Descriptions } from 'antd';

export default function IndexPage() {

  return (
    <div>
      <Descriptions style={{ marginBottom: 24 }}>
        <Descriptions.Item label='用户名'>
          <Access accessible={false} fallback={<div>不显示</div>}>
            显示
          </Access>
        </Descriptions.Item>

        <Access accessible={false} fallback={<div>不显示</div>}>
          显示
        </Access>
      </Descriptions>
    </div>
  );
}
