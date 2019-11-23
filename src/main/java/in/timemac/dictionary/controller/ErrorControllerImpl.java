
package in.timemac.dictionary.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.web.servlet.error.ErrorController;

@RestController
@RequestMapping({ "/" })
public class ErrorControllerImpl implements ErrorController
{
    private static final String PATH = "/error";

    @GetMapping({ "/error" })
    public String error() {
        return "{}";
    }

    public String getErrorPath() {
        return "/error";
    }
}