package com.yedam.control;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class FullCalendar implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//"[{"title": "Sample", "start": "2023-01-05"},{"title": "회의",    "start": "2023-01-21T13:00:00","end": "2023-01-21T16:00:00"}]"
		
		resp.setContentType("text/json;charset=utf-8");
		BoardService svc = new BoardServiceImpl();
		List<Map<String, Object>>list = svc.fullCalendars();
		
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
		
		//resp.getWriter().print("[{\"title\": \"Sample\", \"start\": \"2023-01-05\"},{\"title\": \"회의\",    \"start\": \"2023-01-21T13:00:00\",\"end\": \"2023-01-21T16:00:00\"}]");
		
	}

}
