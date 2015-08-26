package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 加载json数据
 * @author skywalker
 *
 */
public class DataServlet extends HttpServlet {

	private static final long serialVersionUID = 4361548592802157729L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		int type = Integer.parseInt(req.getParameter("type"));
		resp.setContentType("application/json;charset=utf-8");
		PrintWriter out = resp.getWriter();
		if(type == 1) {
			out.write("{\"data\":[{\"id\":\"1\", \"name\":\"青岛\"}, {\"id\":\"2\", \"name\":\"上海\"}]}");
		}else {
			//判断城市id
			int cid = Integer.parseInt(req.getParameter("cid"));
			if(cid == 1) {
				//青岛的区
				out.write("{\"data\":[{\"id\":\"1\", \"name\":\"黄岛区\"}, {\"id\":\"2\", \"name\":\"四方区\"}]}");
			}else {
				//上海
				out.write("{\"data\":[{\"id\":\"1\", \"name\":\"闵行区\"}, {\"id\":\"2\", \"name\":\"黄埔区\"}]}");
			}
		}
		out.close();
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}

}
