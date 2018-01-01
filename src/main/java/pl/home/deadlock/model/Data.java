package pl.home.deadlock.model;

public class Data {

  private int id;
  private String col1;
  private boolean col2;
  private String col3;
  private double col4;
  
  public Data(int id) {
    this.id = id;
  }
  public String getCol1() {
    return col1;
  }
  public void setCol1(String col1) {
    this.col1 = col1;
  }
  public boolean isCol2() {
    return col2;
  }
  public void setCol2(boolean col2) {
    this.col2 = col2;
  }
  public String getCol3() {
    return col3;
  }
  public void setCol3(String col3) {
    this.col3 = col3;
  }
  public double getCol4() {
    return col4;
  }
  public void setCol4(double col4) {
    this.col4 = col4;
  }
  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }
  @Override
  public String toString() {
    return "Data [id=" + id + ", col1=" + col1 + ", col2=" + col2 + ", col3=" + col3 + ", col4="
        + col4 + "]";
  }
}
