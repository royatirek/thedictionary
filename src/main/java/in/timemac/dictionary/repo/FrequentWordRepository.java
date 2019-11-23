package in.timemac.dictionary.repo;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import in.timemac.dictionary.model.FrequentWord;
import org.springframework.data.repository.CrudRepository;

@EnableScan
@Repository
public interface FrequentWordRepository extends CrudRepository<FrequentWord, String>
{
    List<FrequentWord> findAll();
}