package in.timemac.dictionary.repo;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import in.timemac.dictionary.model.Word;
import org.springframework.data.repository.CrudRepository;

@EnableScan
@Repository
public interface DictionaryRepository extends CrudRepository<Word, String>
{
     List<Word> findByWordItem(final String wordItem);
}