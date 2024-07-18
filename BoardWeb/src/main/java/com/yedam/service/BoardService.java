package com.yedam.service;

import java.util.List;

import com.yedam.vo.BoardVO;

/*
 *  mvc 패턴의 디자인에 따라서 Model영역(service, dao : mapper).
 * 책 : 4강 MVC기반 웹프로젝트 참고.
 * 숙제 : 536페이지 MVC에 자세히 읽고 오세요.
 */
public interface BoardService {
	List<BoardVO> boardList();
	boolean addBoard(BoardVO board);
	boolean modifyBoard(BoardVO board);
	boolean removeBoard(int boardNo);
	BoardVO getBoard(int boardNo);
}


//서비스 부분 없으면

//dao)
//등록 > 수정 > 조회
// method) add + mod + select ;
//수정 > 등록 > 조회 
// method) mod + add +  select ;
//조회 > 수정 > 등록 
//method)select + mod + add  ;
// 따로따로 


//서비스 부분 있으면 

//dao)
//method) add;
//method) mod;
//method) select;
//등록 > 수정 > 조회 
//add + mod + select; 배치만 해주면됨 1줄 
