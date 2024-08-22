package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class delCalendar implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String title = req.getParameter("title");
		String start = req.getParameter("start");
		String end = req.getParameter("end");

		BoardVO bvo = new BoardVO();
		
		bvo.setTitle(title);
		bvo.setStartDate(start);
		bvo.setEndDate(end);
		
		BoardService bvc = new BoardServiceImpl();
		
		if (bvc.removeCalendar(bvo)) {
			// 성공적으로 삭제가 되면{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			// 삭제가 실패가 되면{"retCode": "Fial"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		};
		
	
	}
}
