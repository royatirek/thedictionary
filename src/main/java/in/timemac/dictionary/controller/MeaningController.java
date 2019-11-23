package in.timemac.dictionary.controller;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import in.timemac.dictionary.model.FrequentWord;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.json.JSONObject;
import in.timemac.dictionary.model.Word;
import org.springframework.web.bind.annotation.PathVariable;
import in.timemac.dictionary.repo.FrequentWordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import in.timemac.dictionary.repo.DictionaryRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/api" })
public class MeaningController
{
    @Autowired
    DictionaryRepository repository;
    @Autowired
    FrequentWordRepository repositoryFrequentWords;

    @CrossOrigin
    @RequestMapping(value = { "/{word}" }, method = { RequestMethod.POST })
    public String getWord(@PathVariable final String word) {
        final Word result = this.repository.findByWordItem(word.toLowerCase()).get(0);
        try {
            final JSONObject json = new JSONObject();
            json.put("word", (Object)result.getWordItem().toLowerCase());
            json.put("wordContent", (Object)new JSONObject(result.getWordContent()));
            json.put("addSentences", (Object)result.getAddSentences());
            try {
                String mnemonics = result.getMnemonics();
                mnemonics = mnemonics.replace(", \"\"", "");
                if (mnemonics.length() < 15) {
                    mnemonics = "";
                }
                json.put("mnemonics", (Object)mnemonics);
            }
            catch (Exception e) {
                return json.toString();
            }
            return json.toString();
        }
        catch (Exception e2) {
            return "{}";
        }
    }

    @CrossOrigin
    @RequestMapping(value = { "/frequentWord" }, method = { RequestMethod.POST })
    public List<FrequentWord> getFrequentWords() {
        return (List<FrequentWord>)this.repositoryFrequentWords.findAll();
    }


}