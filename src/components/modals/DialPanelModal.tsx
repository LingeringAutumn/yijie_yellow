import React from 'react';
import Button from '@/components/ui/button'; // 根据实际路径调整
import BaseModal from '../shared/BaseModal'; // 根据实际路径调整

interface DialPanelModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const DialPanelModal: React.FC<DialPanelModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	const phoneNumber = '137 0696 5178'; // 3-4-4分段
	const contactName = '家电维修李师傅';

	return (
		<BaseModal isOpen={isOpen} onClose={onClose}>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50 min-w-[350px]"> {/* 保留最小宽度 */}
				<div className="text-lg font-medium text-[#1F2937] mb-4">智能一键拨号面板</div>

				<div className="bg-[#C2DBC2] p-6 rounded-lg space-y-2"> {/* 移除宽高比，保留间距 */}
					<u className="block text-[#2D5A27] text-2xl font-bold text-center"> {/* 下划线 + 居中 */}
						{phoneNumber}
					</u>
					<div className="text-[#2D5A27] text-lg text-center"> {/* 联系人居中 */}
						{contactName}
					</div>
				</div>

				<Button
					className="w-full h-12 bg-[#3A7233] hover:bg-[#3A7233]/90 text-white font-bold text-xl mt-4 rounded-lg"
					onClick={() => {
						console.log(`正在拨打 ${phoneNumber} 给 ${contactName}`);
					}}
				>
					一键拨号
				</Button>
			</div>
		</BaseModal>
	);
};

export default DialPanelModal;