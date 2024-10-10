#pragma once
#include "ISubject.h"
#include <memory>
#include <vector>

class Subject : public ISubject
{
public:
	virtual ~Subject();
	void Subscribe(const std::shared_ptr<IObserver>& observer) override;
	void Unsubscribe(const std::shared_ptr<IObserver>& observer) override;
	void NotifySubscribes() override;

private:
	std::vector<std::weak_ptr<IObserver>> m_observerList;
};
