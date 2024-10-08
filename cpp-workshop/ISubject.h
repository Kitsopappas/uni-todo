class IObserver;

class ISubject: public std::enable_shared_from_this<ISubject>
{
public:
    virtual ~ISubject() {};
    virtual void Subscribe(const std::shared_ptr<IObserver>& observer) = 0;
    virtual void Unsubscribe(const std::shared_ptr<IObserver>& observer) = 0;
    virtual void NotifySubscribes() = 0;
};