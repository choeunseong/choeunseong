package CardController;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import UserVo.UserInfoCareerVo;
import UserVo.UserInfoEduVo;
import UserVo.UserInfoLicenVo;
import UserVo.UserInfoQualifiVo;
import UserVo.UserInfoSkillVo;
import UserVo.UserInfoTrainingVo;
import UserVo.UserInfoVo;

@Repository
public class CardDaoImpl implements CardDao {
	
	@Autowired
	SqlSession sqlSession;
	
	// 불러오기 리스트
	@Override
	public List<UserInfoVo> getHistoryInfo(UserInfoVo userInfo) {
		return sqlSession.selectList("userHis.getHistoryInfo", userInfo);
	}
	// 불러오기 count
	@Override
	public int getHistoryInfoCnt(UserInfoVo userInfo) {
		return sqlSession.selectOne("userHis.getHistoryInfoCnt", userInfo);
	}
	
	// 개인이력카드(기본정보) 상세보기
	@Override
	public UserInfoVo getHistoryInfoDetail(UserInfoVo userInfoVo) {
		return sqlSession.selectOne("userHis.userInfoSelect", userInfoVo);
	}
	
	// 개인이력카드(학력) 상세보기
	@Override
	public List<UserInfoCareerVo> getEduDetailList(int userIdx) {
		return sqlSession.selectList("edu.getEduDetailList", userIdx);//
	}
	
	// 개인이력카드(자격증) 상세보기
	@Override
	public List<UserInfoCareerVo> getQualifiDetailList(int userIdx) {
		return sqlSession.selectList("qualifi.getQualifiDetailList", userIdx);//
	}
	
	// 개인이력카드(경력) 상세보기 리스트
	@Override
	public List<UserInfoCareerVo> getCareerDetailList(int userIdx) {
		return sqlSession.selectList("career.getCareerDetailList", userIdx);//
	}
	
	// 개인이력카드(교육) 상세보기
	@Override
	public List<UserInfoCareerVo> getTrainingDetailList(int userIdx) {
		return sqlSession.selectList("training.getTrainingDetailList", userIdx);//
	}
	
	// 개인이력카드(외국어능력) 상세보기
	@Override
	public List<UserInfoCareerVo> getLicenDetailList(int userIdx) {
		return sqlSession.selectList("licen.getLicenDetailList", userIdx);//
	}
	
	// 개인이력카드(프로젝트경력) 상세보기
	@Override
	public List<UserInfoCareerVo> getSkillDetailList(int userIdx) {
		return sqlSession.selectList("skill.getSkillDetailList", userIdx);//
	}

	
	// 등록 전 같은 주민등록번호로 등록되어있는지 확인
	@Override
	public int searchInfo(UserInfoVo userVo) {
		return sqlSession.selectOne("userHis.searchInfo", userVo);
	}
	
	// 기본정보 insert
	@Override
	public int infoInsert(UserInfoVo userVo) {
		int result =  sqlSession.insert("userHis.infoInsert", userVo);	// 기본정보 insert

		return result;
	}
	
	// 경력insert
	@Override
	public int careerInsert(UserInfoCareerVo userCareerVo) {
		return sqlSession.insert("career.careerInsert", userCareerVo);
	}

	// 학력insert
	@Override
	public int eduInsert(UserInfoEduVo userEduVo) {
		return sqlSession.insert("edu.eduInsert", userEduVo);
	}

	// 언어능력insert
	@Override
	public int licenInsert(UserInfoLicenVo userLicenVo) {
		return sqlSession.insert("licen.licenInsert", userLicenVo);
	}

	// 자격증insert
	@Override
	public int qualifiInsert(UserInfoQualifiVo userQualiVo) {
		return sqlSession.insert("qualifi.qualifiInsert", userQualiVo);
	}

	// 프로젝트경력insert
	@Override
	public int skillInsert(UserInfoSkillVo userSkillVo) {
		return sqlSession.insert("skill.skillInsert", userSkillVo);
	}

	// 교육insert
	@Override
	public int trainingInsert(UserInfoTrainingVo userTrainingVo) {
		return sqlSession.insert("training.trainingInsert", userTrainingVo);
	}
	
	
	
	
	// 기본정보 update
	@Override
	public int infoUpdate(UserInfoVo userVo) {
		return sqlSession.update("userHis.infoUpdate", userVo);
	}
//	// 경력 update
//	@Override
//	public int careerUpdate(UserInfoCareerVo i) {
//		return sqlSession.update("career.careerUpdate", i);
//	}
//	// 학력 update
//	@Override
//	public int eduUpdate(UserInfoEduVo i) {
//		return sqlSession.update("edu.eduUpdate", i);
//	}
//	// 보유기술/외국어능력 update
//	@Override
//	public int licenUpdate(UserInfoLicenVo i) {
//		return sqlSession.update("licen.licenUpdate", i);
//	}
//	// 자격증 update
//	@Override
//	public int qualifiUpdate(UserInfoQualifiVo i) {
//		return sqlSession.update("qualifi.qualifiUpdate", i);
//	}
//	// 프로젝트경력 update
//	@Override
//	public int skillUpdate(UserInfoSkillVo i) {
//		return sqlSession.update("skill.skillUpdate", i);
//	}
//	// 교육 update
//	@Override
//	public int trainingUpdate(UserInfoTrainingVo i) {
//		return sqlSession.update("training.trainingUpdate", i);
//	}
	
	// 경력 delete
	@Override
	public void careerDelete(int userIdx) {
		sqlSession.delete("career.careerDelete", userIdx);
	}
	
	// 학력 delete
	@Override
	public void eduDelete(int userIdx) {
		sqlSession.delete("edu.eduDelete", userIdx);
	}
	
	// 학력 delete
	@Override
	public void licenDelete(int userIdx) {
		sqlSession.delete("licen.licenDelete", userIdx);
	}
	
	// 자격증 delete
	@Override
	public void qualifiDelete(int userIdx) {
		sqlSession.delete("qualifi.qualifiDelete", userIdx);
	}
	
	// 프로젝트경력 delete
	@Override
	public void skillDelete(int userIdx) {
		sqlSession.delete("skill.skillDelete", userIdx);
	}
	
	// 교육 delete
	@Override
	public void trainingDelete(int userIdx) {
		sqlSession.delete("training.trainingDelete", userIdx);
	}
	
	// 연차별 인원보기
	@Override
	public List<UserInfoVo> getGroupInfo() {
		return sqlSession.selectList("userHis.getGroupInfo");
	}
	
	// 연차별 인원정보 상세보기 cnt
	@Override
	public int getSkillCareerCnt(UserInfoVo userVo) {
		return sqlSession.selectOne("userHis.getSkillCareerPersonCnt", userVo);
	}
	
	// 연차별 인원정보 상세보기
	@Override
	public List<UserInfoVo> getSkillCareerPerson(UserInfoVo userVo) {
		return sqlSession.selectList("userHis.getSkillCareerPerson", userVo);
	}
	
	
	
	
	
}
