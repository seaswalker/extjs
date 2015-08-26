package servlet;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 * 文件上传
 * @author skywalker
 *
 */
@WebServlet(name = "uploadServlet", urlPatterns = "/upload")
@MultipartConfig(location = "D:/java/eclipse/Extjs/WebContent/upload", maxFileSize = 1 << 20)
public class UploadServlet extends HttpServlet {

	private static final long serialVersionUID = -8279791785237277465L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doPost(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		//获取上传文件部分
		Collection<Part> parts = req.getParts();
		System.out.println(parts.size());
	}

}
