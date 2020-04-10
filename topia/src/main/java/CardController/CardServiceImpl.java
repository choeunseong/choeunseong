package CardController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import UserVo.UserInfoCareerVo;
import UserVo.UserInfoEduVo;
import UserVo.UserInfoLicenVo;
import UserVo.UserInfoQualifiVo;
import UserVo.UserInfoSkillVo;
import UserVo.UserInfoTrainingVo;
import UserVo.UserInfoVo;

@Service
public class CardServiceImpl implements CardService {
	
	@Autowired
	CardDao cardDao;

	// �ҷ����� ����Ʈ
	@Override
	public List<UserInfoVo> getHistoryInfo(UserInfoVo userInfo) {
		return cardDao.getHistoryInfo(userInfo);
	}
	// �ҷ����� ����Ʈ count
	@Override
	public int getHistoryInfoCnt(UserInfoVo userInfo) {
		return cardDao.getHistoryInfoCnt(userInfo);
	}

	// �����̷�ī��(�⺻����) �󼼺���
	@Override
	public UserInfoVo getHistoryInfoDetail(UserInfoVo userInfoVo) {
		return cardDao.getHistoryInfoDetail(userInfoVo);
	}
	
	 // �����̷�ī��(�з�) �󼼺���
	@Override
	public List<UserInfoCareerVo> getEduDetailList(int userIdx) {
		return cardDao.getEduDetailList(userIdx);
	}
	
	// �����̷�ī��(�ڰ���) �󼼺���
	@Override
	public List<UserInfoCareerVo> getQualifiDetailList(int userIdx) {
		return cardDao.getQualifiDetailList(userIdx);
	}
	
	// �����̷�ī��(���) �󼼺��� ����Ʈ
	@Override
	public List<UserInfoCareerVo> getCareerDetailList(int userIdx) {
		return cardDao.getCareerDetailList(userIdx);
	}
	
	// �����̷�ī��(����) �󼼺���
	@Override
	public List<UserInfoCareerVo> getTrainingDetailList(int userIdx) {
		return cardDao.getTrainingDetailList(userIdx);
	}
	
	// �����̷�ī��(�ܱ���ɷ�) �󼼺���
	@Override
	public List<UserInfoCareerVo> getLicenDetailList(int userIdx) {
		return cardDao.getLicenDetailList(userIdx);
	}
	
	// �����̷�ī��(������Ʈ���) �󼼺���
	@Override
	public List<UserInfoCareerVo> getSkillDetailList(int userIdx) {
		return cardDao.getSkillDetailList(userIdx);
	}
	
	// ��� �� ���� �ֹε�Ϲ�ȣ�� ��ϵǾ��ִ��� Ȯ��
	@Override
	public int searchInfo(UserInfoVo userVo) {
		return cardDao.searchInfo(userVo);
	}
	
	// insert
	@Override
	public int infoInsert(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
						, UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo) {
		System.out.println("���");
		
		int result = 0;
		
		result = cardDao.infoInsert(userVo);
//		if(result == 1) {
//			for(UserInfoCareerVo i : userCareerVo.getCareerList()) {
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.careerInsert(i);		// ��� insert
//			}
//			for(UserInfoEduVo i : userEduVo.getEduList()) {
//				if(userEduVo.getEduList().isEmpty()) {
//					System.out.println("null�̴�");
//				}
//				
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.eduInsert(i);		// ���� insert
//			}
//			for(UserInfoLicenVo i : userLicenVo.getLicenList()) {
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.licenInsert(i);	// �������/���ɷ� insert
//			}
//			for(UserInfoQualifiVo i : userQualiVo.getQualifiList()) {
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.qualifiInsert(i);	// �ڰ��� insert
//			}
//			for(UserInfoSkillVo i : userSkillVo.getSkillList()) {
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.skillInsert(i);	// ������Ʈ��� insert
//			}
//			for(UserInfoTrainingVo i : userTrainingVo.getTrainingList()) {
//				i.setUserIdx(userVo.getUserIdx());
//				result = cardDao.trainingInsert(i);	// ���� insert
//			}
//		}
		if(result == 1) {
			for(UserInfoCareerVo i : userCareerVo.getCareerList()) {
				if(i.getCareerCompName().equals("") && i.getCareerEnterdate().equals("") && i.getCareerLeavedate().equals("") 
					&& i.getCareerSpot().equals("") && i.getCareerResponsib().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				
				i.setUserIdx(userVo.getUserIdx());
				
				result = cardDao.careerInsert(i);		// ��� insert
			}
			for(UserInfoEduVo i : userEduVo.getEduList()) {
				if(i.getEduSchoolName().equals("") && i.getEduStatus().equals("") && i.getEduYear().equals("") 
					&& i.getEduMonth().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.eduInsert(i);		// �з��� insert
			}
			for(UserInfoLicenVo i : userLicenVo.getLicenList()) {
				if(i.getLicenName().equals("") && i.getLicenSkillLevel().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.licenInsert(i);	// �������/���ɷ� insert
			}
			for(UserInfoQualifiVo i : userQualiVo.getQualifiList()) {
				if(i.getQualifiName().equals("") && i.getQualifiGetdate().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.qualifiInsert(i);	// �ڰ��� insert
			}
			for(UserInfoSkillVo i : userSkillVo.getSkillList()) {
				if(i.getSkillProjectName().equals("") && i.getSkillStartdate().equals("") && i.getSkillEnddate().equals("") 
					&& i.getSkillCustomerComp().equals("") && i.getSkillWorkComp().equals("") && i.getSkillApplied().equals("")
					 && i.getSkillIndustry().equals("") && i.getSkillRole().equals("") && i.getSkillModel().equals("")
					 && i.getSkillOs().equals("") && i.getSkillLang().equals("") && i.getSkillDbms().equals("")
					 && i.getSkillComm().equals("") && i.getSkillTool().equals("") && i.getSkillEtc().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.skillInsert(i);	// ������Ʈ��� insert
			}
			for(UserInfoTrainingVo i : userTrainingVo.getTrainingList()) {
				if(i.getTrainingName().equals("") && i.getTrainingStartdate().equals("") && i.getTrainingEnddate().equals("") 
					&& i.getTrainingAgency().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.trainingInsert(i);	// ���� insert
			}
		}
		
		return result;
	}
	
	// update
	@Override
	public int cardUpdate(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
			, UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo) {
		System.out.println("����");
		
		int result = 0;
		
		result = cardDao.infoUpdate(userVo);
		
		cardDao.careerDelete(userVo.getUserIdx());		// ������� ���� �� 
		cardDao.eduDelete(userVo.getUserIdx());			// �з����� ���� �� 
		cardDao.licenDelete(userVo.getUserIdx());		// �������/���ɷ� ���� �� 
		cardDao.qualifiDelete(userVo.getUserIdx());		// �ڰ������� ���� �� 
		cardDao.skillDelete(userVo.getUserIdx());		// ������Ʈ��� ���� �� 
		cardDao.trainingDelete(userVo.getUserIdx());	// �������� ���� �� 
		
		if(result == 1) {
			for(UserInfoCareerVo i : userCareerVo.getCareerList()) {
				if(i.getCareerCompName().equals("") && i.getCareerEnterdate().equals("") && i.getCareerLeavedate().equals("") 
					&& i.getCareerSpot().equals("") && i.getCareerResponsib().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				
				i.setUserIdx(userVo.getUserIdx());
				
				result = cardDao.careerInsert(i);		// ��� insert
			}
			for(UserInfoEduVo i : userEduVo.getEduList()) {
				if(i.getEduSchoolName().equals("") && i.getEduStatus().equals("") && i.getEduYear().equals("") 
					&& i.getEduMonth().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.eduInsert(i);		// �з��� insert
			}
			for(UserInfoLicenVo i : userLicenVo.getLicenList()) {
				if(i.getLicenName().equals("") && i.getLicenSkillLevel().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.licenInsert(i);	// �������/���ɷ� insert
			}
			for(UserInfoQualifiVo i : userQualiVo.getQualifiList()) {
				if(i.getQualifiName().equals("") && i.getQualifiGetdate().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.qualifiInsert(i);	// �ڰ��� insert
			}
			for(UserInfoSkillVo i : userSkillVo.getSkillList()) {
				if(i.getSkillProjectName().equals("") && i.getSkillStartdate().equals("") && i.getSkillEnddate().equals("") 
					&& i.getSkillCustomerComp().equals("") && i.getSkillWorkComp().equals("") && i.getSkillApplied().equals("")
					 && i.getSkillIndustry().equals("") && i.getSkillRole().equals("") && i.getSkillModel().equals("")
					 && i.getSkillOs().equals("") && i.getSkillLang().equals("") && i.getSkillDbms().equals("")
					 && i.getSkillComm().equals("") && i.getSkillTool().equals("") && i.getSkillEtc().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.skillInsert(i);	// ������Ʈ��� insert
			}
			for(UserInfoTrainingVo i : userTrainingVo.getTrainingList()) {
				if(i.getTrainingName().equals("") && i.getTrainingStartdate().equals("") && i.getTrainingEnddate().equals("") 
					&& i.getTrainingAgency().equals("")) {
					continue;
				} // ���� ����ִ� ���� insert�ȵǰ� ó��
				i.setUserIdx(userVo.getUserIdx());

				result = cardDao.trainingInsert(i);	// ���� insert
			}
		}
		
		return result;
	}
	
	// ������ �ο�����
	@Override
	public List<UserInfoVo> getGroupInfo() {
		return cardDao.getGroupInfo();
	}
	
	// ������ �ο����� �󼼺��� cnt
	@Override
	public int getSkillCareerCnt(UserInfoVo userVo) {
		return cardDao.getSkillCareerCnt(userVo);
	}
	
	// ������ �ο����� �󼼺���
	@Override
	public List<UserInfoVo> getSkillCareerPerson(UserInfoVo userVo) {
		return cardDao.getSkillCareerPerson(userVo);
	}
	

	
}
