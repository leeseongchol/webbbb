package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class UpdateBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String bno = req.getParameter("bno");
		String content = req.getParameter("content");
		String title = req.getParameter("title");
		
		BoardVO bobo = new BoardVO();
		bobo.setBoardNo(Integer.parseInt(bno));
		bobo.setContent(content);
		bobo.setTitle(title);

		BoardService svc = new BoardServiceImpl();
		if (svc.modifyBoard(bobo)) {
			// 목록이동.
			resp.sendRedirect("boardList.do");
		}else {
			//실패시
			resp.sendRedirect("modifyBoard.do?bno=" + bno);
		}
		
	}

}