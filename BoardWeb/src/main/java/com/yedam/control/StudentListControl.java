package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class StudentListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		// stdList.do -> 보여줄 페이지는 WEB-INF/jsp/studentlist.jsp
		try {
			req.getRequestDispatcher("board/studentList.tiles").forward(req, resp); // 페이지 재지정.
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
