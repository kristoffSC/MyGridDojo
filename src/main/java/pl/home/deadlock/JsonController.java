package pl.home.deadlock;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import pl.home.deadlock.model.Data;

@RestController
public class JsonController {

  private static final Logger logger = LoggerFactory.getLogger(JsonController.class);

  private final AtomicInteger counter = new AtomicInteger(0);
  private final List<Data> storage = Collections.synchronizedList(new ArrayList<Data>());
  private SecureRandom random = new SecureRandom();
  
  @RequestMapping(value = "/data", method = RequestMethod.GET)
  public List<Data> data() {
    if (storage.size() < 5) {
      sortedAdd(storage, new Data(counter.incrementAndGet()));
    } else {
        
      int nextInt = random.nextInt(storage.size());
      
      Data remove = storage.remove(nextInt);
      logger.info("Remmoved Item: " + remove);
      sortedAdd(storage, new Data(counter.incrementAndGet()));
    }
      
    return Collections.unmodifiableList(storage);
  }

  @RequestMapping(value = "/getData", method = RequestMethod.GET)
  public List<Data> getData() {
    
    ArrayList<Data> dest = new ArrayList<>(storage);
    
    for (Data data : dest) {
      data.setCol4(1);
      data.setId(data.getId() + 100);
    }

    return Collections.unmodifiableList(dest);
  }
  
  
  private void sortedAdd(List<Data> storage, Data itemToAdd)
  {
    storage.add(itemToAdd);
    Collections.sort(storage, new Comparator<Data>() {

      @Override
      public int compare(Data o1, Data o2) {
        
        if (o1.getId() < o2.getId()) return -1;
        if (o1.getId() > o2.getId()) return +1;
        return 0;
        
      }});
    
  }
  
}
