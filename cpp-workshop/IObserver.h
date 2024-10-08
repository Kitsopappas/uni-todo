class IObserver: public std::enable_shared_from_this<IObserver>
{
 public:
  virtual ~IObserver(){};
  virtual void Update() = 0;
  virtual std::string GetName() = 0;
};