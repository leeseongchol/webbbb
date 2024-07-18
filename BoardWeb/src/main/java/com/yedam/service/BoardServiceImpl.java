package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.mapper.BoardMapper;
import com.yedam.vo.BoardVO;

/*
 * 인터페이스(BoardService)를 구현하는 구현객체
 * 인터페이스에 정의된 메소드를 다 구현해야함
 * 
 */
public class BoardServiceImpl implements BoardService {
	SqlSession sqlSession = //
			DataSource.getInstance().openSession(true);
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
	
	@Override
	public List<BoardVO> boardList() {
		// TODO Auto-generated method stub
		return mapper.selectList();
	}

	@Override
	public boolean addBoard(BoardVO board) {
		// TODO Auto-generated method stub
		return mapper.insertBoard(board)==1;
	}

	@Override
	public boolean modifyBoard(BoardVO board) {
		// TODO Auto-generated method stub
		return mapper.updateBoard(board) ==1;
	}

	@Override
	public boolean removeBoard(int boardNo) {
		// TODO Auto-generated method stub
		return mapper.deleteBoard(boardNo)==1;
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		// TODO Auto-generated method stub
		return mapper.selectBoard(boardNo);
	}
	
}
